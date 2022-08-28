import Container from './style'

function Type({ type }) {
    let typeBack
    let typeColor
    switch (type) {
        case 'bug':
            typeBack = '#729f3f'
            typeColor = '#fff'
            break
        case 'dark':
            typeBack = '#707070'
            typeColor = '#fff'
            break
        case 'dragon':
            typeBack = 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'
            typeColor = '#fff'
            break
        case 'electric':
            typeBack = '#eed535'
            typeColor = '#212121'
            break
        case 'fairy':
            typeBack = '#fdb9e9'
            typeColor = '#212121'
            break
        case 'fighting':
            typeBack = '#d56723'
            typeColor = '#fff'
            break
        case 'fire':
            typeBack = '#fd7d24'
            typeColor = '#fff'
            break
        case 'flying':
            typeBack = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'
            typeColor = '#212121'
            break
        case 'ghost':
            typeBack = '#7b62a3'
            typeColor = '#fff'
            break
        case 'grass':
            typeBack = '#9bcc50'
            typeColor = '#212121'
            break
        case 'ground':
            typeBack = 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)'
            typeColor = '#212121'
            break
        case 'ice':
            typeBack = '#51c4e7;'
            typeColor = '#212121'
            break
        case 'normal':
            typeBack = '#a4acaf;'
            typeColor = '#212121'
            break
        case 'poison':
            typeBack = '#b97fc9'
            typeColor = '#fff'
            break
        case 'psychic':
            typeBack = '#f366b9'
            typeColor = '#fff'
            break
        case 'rock':
            typeBack = '#a38c21'
            typeColor = '#fff'
            break
        case 'steel':
            typeBack = '#9eb7b8'
            typeColor = '#212121'
            break
        case 'water':
            typeBack = '#4592c4'
            typeColor = '#fff'
            break

        default:
            typeBack = 'white'
            typeColor = 'black'
            break
    }
    return (
        <Container typeBack={typeBack} typeColor={typeColor}>
            {type}
        </Container>
    )
}

export default Type
