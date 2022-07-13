import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useValidateRole(role) {
  const { data, status } = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if (
      status === 'unauthenticated' ||
      (status === 'authenticated' && data.user.role !== role)
    ) {
      router.replace('/not_allowed')
    }
  }, [status, data])

  return [status, data]
}