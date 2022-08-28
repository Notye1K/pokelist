import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import PokeCard from '../PokeCard'
import Container from './style'
import baseUrl from '../../utils/baseUrl'
import { useLocation, useNavigate } from 'react-router-dom'

function MainPage() {
    function useQuery() {
        const { search } = useLocation()
        return useMemo(() => new URLSearchParams(search), [search])
    }

    const query = useQuery()
    const pag = query.get('pag')
    console.log(pag)
    const [url, setUrl] = useState(
        pag ? baseUrl + `?offset=${parseInt(pag) * 20}&limit=20` : baseUrl
    )
    const [response, setResponse] = useState()

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((response) => setResponse(response.data))
    }, [url, query])

    let pagination = 0
    if (response) {
        pagination = Math.ceil(response.count / 20)
    }

    const navigate = useNavigate()

    console.log(url)
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
                        onClick={() => {
                            navigate('/?pag=' + index)
                            setUrl(
                                baseUrl +
                                    `?offset=${parseInt(index) * 20}&limit=20`
                            )
                        }}
                    >
                        {index}
                    </button>
                ))}
            </header>
            <ul>
                {response
                    ? response.results.map((poke) => (
                          <li
                              key={poke.name}
                              onClick={() => navigate(`/${poke.name}`)}
                          >
                              <PokeCard url={poke.url} />
                          </li>
                      ))
                    : 'haha'}
            </ul>
        </Container>
    )
}

export default MainPage
