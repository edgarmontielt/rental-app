import Link from 'next/link'
import { Nav } from './styles'

export default function Navbar() {
  return (
    <Nav>
        <Link href={'/'}><h4>Home</h4></Link>
        <div>
            <ul>
                <Link href={'/auth/login'}>Login</Link>
                <Link href={'/admin/homes/add'}>Add Home</Link>
            </ul>
        </div>
    </Nav>
  )
}
