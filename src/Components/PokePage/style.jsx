import styled from 'styled-components'

const Container = styled.main`
    .card {
        width: min(30%, 300px);
        margin: auto;
        @media (max-width: 500px) {
            width: 60%;
        }
        @media (max-width: 330px) {
            width: 80%;
        }
    }

    .body {
        width: 40%;
        margin: auto;

        display: flex;
        justify-content: space-between;
    }

    .types {
        h1 {
            text-align: center;
        }
        & div {
            width: 70%;
            margin: auto;

            display: flex;
            gap: 2em;
            justify-content: center;
        }
    }
`

export default Container
