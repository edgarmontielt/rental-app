import React from 'react'
import Navbar from '../navigation'
import { Layout } from './styles'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Layout>{children}</Layout>
    </>
  )
}
