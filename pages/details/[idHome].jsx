import { useRouter } from 'next/router'
import React from 'react'
import { HeadComponent } from '../../components/utils/head';
import DetailsModule from '../../modules/home/details';

export default function HomeDetails() {
  const router = useRouter()
  const { idHome } = router.query
  return (
    <>
      <HeadComponent title={'Details'}/>
      <DetailsModule idHome={idHome}/>
    </>
  )
}
