import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../utils/baseUrl'
import PokeCard from '../PokeCard'
import SearchBar from '../SearchBar'
import Type from '../Type'
import Container from './style'
import pokelogo from '../../assets/pokelogo.png'
import HomeIcon from '@mui/icons-material/Home'
import { IconButton, TextField, Tooltip } from '@mui/material'

function PokePage() {
    const { pokemon } = useParams()
    const [info, setInfo] = useState()
    const navigate = useNavigate()

    const url = baseUrl + pokemon

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((response) => setInfo(response.data))
    }, [pokemon])

    return (
        <Container>
            <header>
                <img
                    onClick={() => navigate(`/`)}
                    src={pokelogo}
                    alt="pokemon"
                />
                {info && (
                    <div className="search">
                        {info.id === 1 || (
                            <button onClick={() => navigate(`/${info.id - 1}`)}>
                                Previous
                            </button>
                        )}
                        <SearchBar />

                        {info.id === 10249 || (
                            <button onClick={() => navigate(`/${info.id + 1}`)}>
                                Next
                            </button>
                        )}
                    </div>
                )}

                <Tooltip title="Home">
                    <IconButton
                        sx={{
                            '&:hover': { background: '#fff' },
                            background: '#fff',
                        }}
                        aria-label="home"
                        size="small"
                        onClick={() => navigate(`/`)}
                    >
                        <HomeIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </header>
            {info ? (
                <>
                    <section className="card">
                        <PokeCard url={url} />
                    </section>

                    <section className="body">
                        <h1>Body</h1>
                        <div>
                            <p>Height: {info.height / 10} m</p>
                            <p>Weight: {info.weight / 10} kg</p>
                        </div>
                    </section>

                    <section className="types">
                        <h1>Types</h1>
                        <div>
                            {info.types.map((type) => (
                                <Type
                                    type={type.type.name}
                                    key={type.type.name}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="comments-area">
                        <h1>Comments</h1>
                        <div className="user-comment">
                            <h2>Nome user</h2>
                            <textarea name="userComment" rows="5"></textarea>
                            <button>enviar</button>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                <h2>Nome da sisaf</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ullam praesentium
                                    veritatis id odit vel voluptatum a quibusdam
                                    maiores dicta atque.
                                </p>
                            </div>
                            <div className="comment">
                                <h2>Nome da sisaf</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ullam praesentium
                                    veritatis id odit vel voluptatum a quibusdam
                                    maiores dicta atque.
                                </p>
                            </div>
                            <div className="comment">
                                <h2>Nome da sisaf</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ullam praesentium
                                    veritatis id odit vel voluptatum a quibusdam
                                    maiores dicta atque.
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                'pokemon non enexiste'
            )}
        </Container>
    )
}

export default PokePage
