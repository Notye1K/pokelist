import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../utils/baseUrl'
import PokeCard from '../PokeCard'
import Type from '../Type'
import Container from './style'

function PokePage() {
    const { pokemon } = useParams()
    const [info, setInfo] = useState()
    const navigate = useNavigate()

    const url = baseUrl + pokemon

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((response) => setInfo(response.data))
    }, [])

    return (
        <Container>
            {info ? (
                <>
                    <button onClick={() => navigate(-1)}>voltar</button>
                    <section className="card">
                        <PokeCard url={url} />
                    </section>

                    <section className="body">
                        <p>height = {info.height}</p>
                        <p>weight = {info.weight}</p>
                    </section>

                    <section className="types">
                        <h1>Types</h1>
                        <div>
                            {info.types.map((type) => (
                                <Type
                                    type={type.type.name}
                                    key={type.type.name}
                                >
                                    {type.type.name}
                                </Type>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h1>Comments</h1>
                        <div></div>
                    </section>
                </>
            ) : (
                'pokemon non enexiste'
            )}
        </Container>
    )
}

export default PokePage
