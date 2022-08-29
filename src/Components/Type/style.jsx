import styled from 'styled-components'

const Container = styled.div`
    background: ${(props) => props.typeBack};
    color: ${(props) => props.typeColor};

    max-width: 150px;
    height: 25px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    text-align: center;
`

export default Container
