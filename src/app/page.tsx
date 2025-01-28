import { SignInForm } from "@/components/forms/SignInForm"
import { ToastTest } from "@/components/toast/Test"

export default function Home() {
  return (
    <main>
      <section className="flex">
        <div className="w-1/2 p-16">
          <h1>Hello Nice To Meet You</h1>
          <ToastTest />
        </div>
        <div className="w-1/2 pt-16">
          <SignInForm />
        </div>
      </section>
    </main>
  )
}
