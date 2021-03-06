import Link from 'next/link'
import { Container, Nav, NavContainer, Navigation, SectionLinks } from './styles'
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <Navigation>
      <Container>
        <Link href={'/'}><h5>Home</h5></Link>
        <NavContainer>
          <SectionLinks>
            {session ?
              <>
                <Link href={'/admin/homes/add'}>Add Home</Link>
                <li>{session.user.name}</li>
                <li onClick={signOut}>SignOut</li>
              </> :
              <>
                <Link href={'/auth/login'}>Login</Link>
              </>
            }
          </SectionLinks>
        </NavContainer>
      </Container>
    </Navigation>
  )
}
