import styled from 'styled-components'

const Card = styled.div`
    background-color: #2c2c2c;
    color: #fff;
    padding: 10px;
    border-radius: 10px;

    article {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        & > section {
            h1 {
                font-size: 2em;
                margin-bottom: 10px;
                text-align: center;
            }

            & > img {
                width: 100%;
                height: 215px;
                background-color: #424242;
                border-radius: 20px;
                margin-bottom: 10px;
            }
        }

        section.description {
            height: 110px;
            padding: 8px;
            background-color: white;
            color: black;
            font-size: 1.1em;
            border-radius: 3%;

            text-align: justify;
            overflow-y: auto;

            display: flex;
        }

        section.stats {
            display: flex;

            .attack,
            .defense,
            .hp {
                position: relative;
                display: flex;
                justify-content: center;
                margin-top: 10px;

                img {
                    width: 80%;
                }

                span {
                    font-weight: bold;
                    font-size: 1.5em;
                    color: black;

                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 5;
                }
            }
        }
    }
`

const Shading = styled.div`
    width: ${(props) => props.size + 'px'};
    height: 30px;
    background: white;
    opacity: 0.5;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export { Card, Shading }
