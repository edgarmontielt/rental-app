import React from 'react'
import Navbar from '../navigation'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
