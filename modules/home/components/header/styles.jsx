import styled, { keyframes } from "styled-components"

const opacity = keyframes`
    from {
        background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    }
    to {
        background-image: linear-gradient(90deg, #121212c0 17%, #0000007e 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    }
`

const Container = styled.div`
    margin-top: 3rem;
    background-image: linear-gradient(90deg, #121212c0 17%, #0000007e 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    height: 70vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { Container }