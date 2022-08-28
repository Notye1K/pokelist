import styled from 'styled-components'

const Container = styled.main`
    .card {
        width: 30%;
        margin: auto;
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
