import { getCsrfToken } from 'next-auth/react'
import FacebookAuthBtn from '../../components/global/providers/facebook'
import GoogleAuthBtn from '../../components/global/providers/google'

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)

  return {
    props: {
      csrfToken
    }
  }
}

export default function Login({ csrfToken }) {
  return (
    <div>
        <GoogleAuthBtn csrfToken={csrfToken}/>
        <FacebookAuthBtn csrfToken={csrfToken}/>
    </div>
  )
}
