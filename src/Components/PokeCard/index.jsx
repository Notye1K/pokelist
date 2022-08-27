import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './style'
import swords from '../../assets/swords.png'
import heart from '../../assets/heart.png'
import shield from '../../assets/shield.png'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

function PokeCard({ url }) {
    const [info, setInfo] = useState(null)
    const [description, setDescription] = useState('')

    useEffect(() => {
        const infoPromise = axios.get(url)
        infoPromise.then((response) => {
            setInfo(response.data)
            const descriptionPromisse = axios.get(response.data.species.url)
            descriptionPromisse.then((response) => {
                const textEntries = response.data.flavor_text_entries
                const textFiltered = textEntries.find(
                    (entry) => entry.language.name === 'en'
                )
                const textFormatted = textFiltered.flavor_text
                    .replace('\f', ' ')
                    .replace('POKéMON', 'POKÉMON')
                setDescription(textFormatted)
            })
        })
        infoPromise.catch((error) => console.log(error.response))
    }, [])

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: '1.5em',
        },
    })

    let hp
    let attack
    let defense
    if (info) {
        ;[hp, attack, defense] = info.stats
    }
    return (
        <Card>
            {info ? (
                <article>
                    <h1>{info.name.toUpperCase()}</h1>
                    <img
                        src={
                            info.sprites.other.home.front_default ||
                            info.sprites.front_default
                        }
                        alt={info.name}
                    />

                    <section className="description">{description}</section>

                    <section className="stats">
                        <CustomTooltip title="hp">
                            <div className="hp">
                                <img src={heart} alt="hp" />
                                <span>{hp.base_stat}</span>
                                <div></div>
                            </div>
                        </CustomTooltip>
                        <CustomTooltip title="attack">
                            <div className="attack">
                                <img src={swords} alt="attack" />
                                <span>{attack.base_stat}</span>
                                <div></div>
                            </div>
                        </CustomTooltip>
                        <CustomTooltip title="defense">
                            <div className="defense">
                                <img src={shield} alt="defense" />
                                <span>{defense.base_stat}</span>
                                <div></div>
                            </div>
                        </CustomTooltip>
                    </section>
                </article>
            ) : (
                'loading'
            )}
        </Card>
    )
}

export default PokeCard
