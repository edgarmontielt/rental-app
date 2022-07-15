import styled from "styled-components";

const Homes = styled.div`
  max-width: 320px;
  display: flex;
  gap: 2rem;
  @media (min-width:768px ) {
    max-width: 768px;
  }
  @media (min-width:1000px ) {
    max-width: 1024px;
  }
`

export { Homes }