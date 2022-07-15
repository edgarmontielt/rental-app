import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Container, Title } from './styles'
import HomesSection from './homes';

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
  return (
    <Container>
      {console.log({ loading, error, data })}
      <Title>Homes Offers</Title>
      <HomesSection homes={data?.homes} />
    </Container>
  )
}
