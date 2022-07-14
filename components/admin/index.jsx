import useValidateRole from '../../hooks/useValidateRole';
import { HeadComponent } from '../utils/head';

export default function AdminPage({ children }) {
  const [status, data] = useValidateRole('ADMIN')

  if (status === 'loading' || data?.user?.role !== 'ADMIN' ) return <p>Loading...</p>
  return (
    <>
      <HeadComponent title={`Admin | ${children[0].props.children}`}/>
      <p>Admin</p>
      {children}
    </>
  )
}
