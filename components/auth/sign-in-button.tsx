import { signIn } from "next-auth/react"

const SignInButton: React.FC<JSX.IntrinsicElements['button']> = (props) => {
  return (
    <button
        className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-200 rounded-lg shadow-lg mr-2 cursor-pointer"
        onClick={(e) => {
            e.preventDefault()
            signIn('discord', { callbackUrl: '/dashboard' })
        }}
        {...props}
    >
        Login With Discord
    </button>
  )
}

export default SignInButton