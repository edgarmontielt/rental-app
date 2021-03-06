import styled from "styled-components"

const Navigation = styled.nav`
    position: fixed;
    width: 100%;
    background-color: white;
    padding: 1rem 0;
    z-index: 10;
`

const Container = styled.div`
    max-width: 320px;
    margin: auto;
    display: flex;
    align-items: center;
    @media (min-width:768px ) {
        max-width: 900px;
    }
    @media (min-width:1000px ) {
        max-width: 1124px;
    }
`

const NavContainer = styled.div`
    margin-left: auto;
`

const SectionLinks = styled.ul`
    display: flex;
    gap: 1rem;
`

export { Navigation, Container, NavContainer, SectionLinks }