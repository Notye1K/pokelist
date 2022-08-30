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
import { IconButton, Tooltip } from '@mui/material'
import Google from '../Google'
import sendComment from '../../service/sendComment'
import getComments from '../../service/getComments'

function PokePage() {
    const { pokemon } = useParams()
    const [info, setInfo] = useState()
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    const url = baseUrl + pokemon

    useEffect(() => {
        const promisePokeApi = axios.get(url)
        promisePokeApi.then((response) => {
            setInfo(response.data)

            const promiseBackApi = getComments(response.data.id)
            promiseBackApi.then((response) => setComments(response.data))
        })
    }, [pokemon])

    function handleSend() {
        const data = {
            comment,
            email: user.email,
            pokemonId: info.id,
            name: user.givenName,
            img: user.imageUrl,
        }

        const promise = sendComment(data)
    }

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
                            <h2>{user?.givenName || 'Sign-in to comment'}</h2>
                            <textarea
                                disabled={user ? false : true}
                                name="userComment"
                                rows="5"
                                value={comment}
                                placeholder="Type your comment"
                                onChange={(event) =>
                                    setComment(event.target.value)
                                }
                            ></textarea>
                            <button
                                disabled={user && comment ? false : true}
                                onClick={handleSend}
                            >
                                send
                            </button>
                        </div>
                        <Google setUser={setUser} user={user} />
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
