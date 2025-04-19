export default async function ProfilePage({
  params,
}: {
  params: Promise<{ did: string }>
}) {
  const { did } = await params

  return (
    <div>
      <h1>`Profile for: ${did}`</h1>
    </div>
  )
}
