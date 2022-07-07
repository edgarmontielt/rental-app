import useValidateRole from '../../../hooks/useValidateRole';

export default function AdminPage({ children }) {
  const [status, data] = useValidateRole('ADMIN')

  if (status === 'loading' || data?.user?.role !== 'ADMIN' ) return <p>Loading...</p>
  return (
    <>
      <p>Admin</p>
      {children}
    </>
  )
}
