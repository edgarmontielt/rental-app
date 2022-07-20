import styled from "styled-components";

const Layout = styled.main`
    max-width: 320px;
    margin: 0 auto;

    @media (min-width:768px ) {
        max-width: 900px;
    }
    @media (min-width:1000px ) {
        max-width: 1124px;
    }
`

export { Layout }