import { signOut } from "next-auth/react"

const SignOutButton: React.FC<JSX.IntrinsicElements['button']> = (props) => {
  return (
    <button
        className="block m-0 text-xs italic text-gray-500 hover:text-gray-300"
        onClick={(e) => {
            e.preventDefault()
            signOut({ callbackUrl: '/' })
        }}
        {...props}
    >
        → Logout
    </button>
  )
}

export default SignOutButton