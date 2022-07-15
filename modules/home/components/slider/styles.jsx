import styled from "styled-components";

const Container = styled.section`
    padding: 1rem 3rem;
`

const Title = styled.h4`
  margin-top: 1rem;
  text-align: center;
`

const Homes = styled.div`
  max-width: 320px;
  @media (min-width:768px ) {
    max-width: 768px;
  }
  @media (min-width:1000px ) {
    max-width: 1024px;
  }
`

export { Container, Title, Homes }