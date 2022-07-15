import React from 'react'
import HomeCard from './card'
import { Homes } from './styles'

export default function HomesSection({ homes }) {
  return (
    <Homes>
      {homes?.map(home => <HomeCard key={home.id} home={home} />)}
    </Homes>
  )
}
