import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Container, Title } from './styles'
import HomesSection from './homes'
import { ImSpinner8 } from 'react-icons/im'

export default function Slider() {

  const { loading, error, data } = useQuery(gql`
  query Homes {
    homes {
      id
      title
      description
      price
      images
      location {
        city
        state
      }
    }
  }`)

  if (loading) {
    return (
      <div>
        <ImSpinner8 />
      </div>
    )
  }

  return (
    <Container>
      <Title>Homes Offers</Title>
      <HomesSection homes={data?.homes} />
    </Container>
  )
}
