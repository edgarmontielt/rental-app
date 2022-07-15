import { HeadComponent } from "../components/utils/head"
import { useQuery, gql } from '@apollo/client';

export default function Home() {
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
    }
  `)

  return (
    <>
      {console.log({ loading, error, data })}
      <HeadComponent title={'Home'} />
      <h1>Home</h1>
    </>
  )
}
