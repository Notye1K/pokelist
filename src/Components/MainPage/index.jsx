import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import PokeCard from '../PokeCard'
import Container from './style'
import baseUrl from '../../utils/baseUrl'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import pokelogo from '../../assets/pokelogo.png'
import Google from '../Google'

function MainPage() {
    function useQuery() {
        const { search } = useLocation()
        return useMemo(() => new URLSearchParams(search), [search])
    }

    const query = useQuery()
    const pag = query.get('pag') || 1
    const [url, setUrl] = useState(
        pag ? baseUrl + `?offset=${(parseInt(pag) - 1) * 20}&limit=20` : baseUrl
    )
    const [response, setResponse] = useState()

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((response) => setResponse(response.data))
    }, [url, query])

    if (pag) {
        document.getElementById(`pag${pag}`)?.focus()
    }

    let pagination = 0
    if (response) {
        pagination = Math.ceil(response.count / 20)
    }

    const navigate = useNavigate()

    function sliderRight() {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 100
    }
    function sliderLeft() {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 100
    }

    return (
        <Container>
            <header>
                <img src={pokelogo} alt="pokemon" />
                {response ? (
                    <div className="search">
                        {response.previous !== null && (
                            <button
                                onClick={() => {
                                    setUrl(response.previous)
                                    navigate('/?pag=' + (parseInt(pag) - 1))
                                }}
                            >
                                Previous
                            </button>
                        )}
                        <SearchBar />
                        {response.next !== null && (
                            <button
                                onClick={() => {
                                    setUrl(response.next)
                                    navigate('/?pag=' + (parseInt(pag) + 1))
                                }}
                            >
                                Next
                            </button>
                        )}
                    </div>
                ) : (
                    'Loading...'
                )}
                <div className="pages">
                    <ChevronLeftIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={sliderLeft}
                    />
                    <div id="slider">
                        {[...Array(pagination)].map((el, index) => (
                            <button
                                key={index}
                                id={`pag${index + 1}`}
                                onClick={() => {
                                    navigate('/?pag=' + (index + 1))
                                    setUrl(
                                        baseUrl +
                                            `?offset=${
                                                parseInt(index) * 20
                                            }&limit=20`
                                    )
                                }}
                                style={
                                    pag == index + 1
                                        ? {
                                              background: '#424242',
                                              color: 'white',
                                          }
                                        : {}
                                }
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <ChevronRightIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={sliderRight}
                    />
                </div>
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
                    : 'Loading...'}
            </ul>
        </Container>
    )
}

export default MainPage
