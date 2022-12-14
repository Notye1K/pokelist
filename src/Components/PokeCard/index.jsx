import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Card, Shading } from './style'
import swords from '../../assets/swords.png'
import heart from '../../assets/heart.png'
import shield from '../../assets/shield.png'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import capitalize from '../../utils/capitalize'
import AlertContext from '../AlertContext'

function PokeCard({ url }) {
    const [info, setInfo] = useState(null)
    const [description, setDescription] = useState('')
    const { setMessage, setOpen } = useContext(AlertContext)

    function formatText(textEntries) {
        const textFiltered = textEntries.find(
            (entry) => entry.language.name === 'en'
        )
        const textFormatted = textFiltered.flavor_text
            .replace('\f', ' ')
            .replace('POKéMON', 'POKÉMON')
            .replace('\n', ' ')
        return textFormatted
    }

    useEffect(() => {
        const infoPromise = axios.get(url)
        infoPromise.then((response) => {
            setInfo(response.data)

            const descriptionPromisse = axios.get(response.data.species.url)
            descriptionPromisse.then((response) => {
                const textEntries = response.data.flavor_text_entries
                const textFormatted = formatText(textEntries)
                setDescription(textFormatted)
            })
        })
        infoPromise.catch((error) => {
            console.log(error.response)
            setMessage('Something is wrong, please try again later')
            setOpen(true)
        })
    }, [url])

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
                    <section>
                        <h1>{capitalize(info.name)}</h1>
                        <img
                            src={
                                info.sprites.other['official-artwork']
                                    .front_default || info.sprites.front_default
                            }
                            alt={info.name}
                        />
                    </section>

                    <section className="description">{description}</section>

                    <section className="stats">
                        <CustomTooltip title="hp">
                            <div className="hp">
                                <img src={heart} alt="hp" />
                                <span>{hp.base_stat}</span>
                                <Shading size={hp.base_stat < 100 ? 30 : 50} />
                            </div>
                        </CustomTooltip>
                        <CustomTooltip title="attack">
                            <div className="attack">
                                <img src={swords} alt="attack" />
                                <span>{attack.base_stat}</span>
                                <Shading
                                    size={attack.base_stat < 100 ? 30 : 50}
                                />
                            </div>
                        </CustomTooltip>
                        <CustomTooltip title="defense">
                            <div className="defense">
                                <img src={shield} alt="defense" />
                                <span>{defense.base_stat}</span>
                                <Shading
                                    size={defense.base_stat < 100 ? 30 : 50}
                                />
                            </div>
                        </CustomTooltip>
                    </section>
                </article>
            ) : (
                'Loading...'
            )}
        </Card>
    )
}

export default PokeCard
