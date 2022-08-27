import axios from 'axios'
import { useEffect, useState } from 'react'
import PokeCard from '../PokeCard'
import Container from './style'

function MainPage() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const [url, setUrl] = useState(baseUrl)
    const [response, setResponse] = useState()

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((response) => setResponse(response.data))
    }, [url])

    let pagination = 0
    if (response) {
        pagination = Math.ceil(response.count / 20)
    }

    return (
        <Container>
            <header>
                {response ? (
                    <>
                        <button
                            onClick={() => {
                                setUrl(response.previous)
                            }}
                        >
                            volt
                        </button>
                        <button
                            onClick={() => {
                                setUrl(response.next)
                            }}
                        >
                            prox
                        </button>
                    </>
                ) : (
                    'asdf'
                )}
                {[...Array(pagination)].map((el, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            setUrl(baseUrl + `?offset=${index * 20}&limit=20`)
                        }
                    >
                        {index}
                    </button>
                ))}
            </header>
            <ul>
                {response
                    ? response.results.map((poke) => (
                          <PokeCard key={poke.name} url={poke.url} />
                      ))
                    : 'haha'}
            </ul>
        </Container>
    )
}

export default MainPage
