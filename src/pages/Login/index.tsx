import { useAuth } from "../../services/auth"

export const Login = () => {
  const {session, getAuthUI, signOut} = useAuth()

  if (!session) {
    return getAuthUI()
  }
  
  return (
    <div>
      <h1>User logged in</h1>
      <button type="button" onClick={signOut} style={{backgroundColor: "red"}}>SignOUT</button>

    </div>
  )
}