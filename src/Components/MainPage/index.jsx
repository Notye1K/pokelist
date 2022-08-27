import axios from 'axios'
import { useEffect, useState } from 'react'
import PokeCard from '../PokeCard'
import Container from './style'

function MainPage() {
    const [pokes, setPokes] = useState([])

    useEffect(() => {
        const promise = axios.get('https://pokeapi.co/api/v2/pokemon/')
        promise.then((response) => setPokes(response.data.results))
    }, [])

    return (
        <Container>
            <header> alala</header>
            <ul>
                {pokes
                    ? pokes.map((poke) => (
                          <PokeCard key={poke.name} url={poke.url} />
                      ))
                    : 'haha'}
            </ul>
        </Container>
    )
}

export default MainPage
