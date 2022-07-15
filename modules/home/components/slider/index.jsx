import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Container, Homes, Title } from './styles'

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
      <Homes>
        {data.homes.map(home => {
          return (
            <>
              <p>{home.title}</p>
              <img src={home.images[0]} />
            </>
          )
        })}
      </Homes>
    </Container>
  )
}
