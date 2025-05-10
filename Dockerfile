# Base image
FROM node:18-alpine AS base

# Install any native dependencies
RUN apk add --no-cache libc6-compat

# Install npm deps
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the Next.js app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_OUTPUT_STANDALONE=1
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy over public assets
COPY --from=builder /app/public ./public

# Copy the standalone build and static files with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static     ./.next/static

# Ensure the nextjs user owns all files
RUN chown -R nextjs:nodejs /app

USER nextjs

# Expose the port and set env vars
EXPOSE 3000
ENV PORT=3000
ENV HEALTH_PATH=/healthcheck

# Healthcheck (uses the same PORT and the /healthcheck endpoint)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD sh -c 'curl -f "http://localhost:${PORT}${HEALTH_PATH}" || exit 1'

# Start the app
CMD ["node", "server.js"]
