import styled from 'styled-components'

const Container = styled.main`
    header {
        width: 100%;
        padding-bottom: 10px;
        background-color: #c74343;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        z-index: 10;

        img {
            width: 100px;
            position: absolute;
            top: 10px;
            left: 10px;
            cursor: pointer;
            @media (max-width: 570px) {
                display: none;
            }
        }

        .search {
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                padding: 5px;
                border-radius: 10px;
                background-color: #fff;
                border: none;
                cursor: pointer;
            }
        }
    }

    .card {
        width: min(30%, 300px);
        margin: auto;
        margin-top: 17vh;
        @media (max-width: 500px) {
            width: 60%;
        }
        @media (max-width: 330px) {
            width: 80%;
        }
    }

    .body {
        width: max(30%, 300px);
        margin: auto;
        margin-top: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }

    .types {
        margin-top: 10px;
        h1 {
            margin-bottom: 10px;
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

    .comments-area {
        margin-top: 20px;
        padding: 20px;
        background-color: #424242;
        color: #fff;

        h1 {
            font-size: 2em;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 1.3em;
            margin-bottom: 10px;
        }

        .user-comment {
            width: 50%;

            display: flex;
            flex-direction: column;

            textarea {
                width: 100%;
                padding: 10px;
            }
            button {
                margin-left: auto;
            }
        }

        .comments {
            margin-top: 10px;

            display: flex;
            flex-direction: column;
            gap: 1em;
        }
    }
`

export default Container
