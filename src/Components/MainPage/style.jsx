import styled from 'styled-components'

const Container = styled.main`
    width: 100%;

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
            @media (max-width: 600px) {
                display: none;
            }
        }

        button {
            padding: 5px;
            border-radius: 10px;
            background-color: #fff;
            border: none;
            cursor: pointer;
        }

        .search {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width: 61px;
            }
        }

        .pages {
            display: flex;
            width: max(30%, 200px);
            #slider {
                overflow-x: hidden;
                scroll-behavior: smooth;

                display: flex;
                gap: 5px;
            }
        }
    }

    ul {
        margin-top: 21vh;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        margin-bottom: 10px;
    }

    li {
        cursor: pointer;
        width: max(25%, 300px);
    }
`

export default Container
