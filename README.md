# Hello Nice Tomato

## Getting Started

Install dependencies:

```bash
npm install
```

## Run the Apps

### Web

Start the web project by running the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

Run the Storybook server:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result. This should usually happen automatically.

## Build

Build the Docker images

### Web

```bash
docker buildx build --load -t hello-nice-tomato -f Dockerfile .
```

### Storybook

Build the Storybook static files:

```bash
docker buildx build --load -t hello-nice-tomato-storybook -f Dockerfile.storybook .
```

## Troubleshooting and things

If you're on a Mac that doesn't like Docker (Desktop) anymore install [Colima](https://github.com/abiosoft/colima)

(Example to start Colima)

```bash
colima start -c 4 -m 8 -d 100
```
