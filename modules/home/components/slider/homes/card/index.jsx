import React from 'react'
import { Card } from './styles'

export default function HomeCard({ home }) {
  return (
    <Card>
      <img src={home.images[0]} width='100%'/>
      <p>{home.title}</p>
    </Card>
  )
}
