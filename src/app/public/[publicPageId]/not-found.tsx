import Link from "next/link"

export default function NotFoundTomatoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center px-6">
        <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
        <p className="text-gray-600 mb-6">
          {`Sorry, but this profile doesn't seem to exist. It might have been
          deleted or the link might be incorrect.`}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">What is this?</h3>
          <p className="text-gray-600 mb-4">
            This is a profile page from Hello Nice To Meet You - a platform that
            helps professionals create and manage their online presence with
            customizable profiles and smart redirection features.
          </p>
          <p className="text-gray-600">
            Want to create your own professional profile?
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Your Profile
        </Link>
      </div>
    </div>
  )
}
