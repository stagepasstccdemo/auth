import { useAuth } from "../../services/auth"

export const Login = () => {
  const {session, getAuthUI} = useAuth()

  if (!session) {
    return getAuthUI()
  }
  
  return (
    <div>User logged in</div>
  )
}