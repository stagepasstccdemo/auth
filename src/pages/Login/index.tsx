import { Auth } from "@supabase/auth-ui-react"
import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { Box } from "@stagepass/osiris-ui"


const supabase = createClient('https://mintqpocupbvbhaqlmtu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbnRxcG9jdXBidmJoYXFsbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzU0NjYsImV4cCI6MTk5Njc1MTQ2Nn0.a5VbtP5aoRzcTfk8pMfMDexWyiVvW4ja45d_SGdXTCM')

export const Login = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session)
    })

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Box style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}>
        <div style={{width: '40%'}}>
        <Auth  
          supabaseClient={supabase} 
          appearance={{theme: ThemeSupa}}
          providers={['google', 'apple']}
        />
        </div>
      </Box>
    )
  }
  
  return (
    <div>User logged in</div>
  )
}