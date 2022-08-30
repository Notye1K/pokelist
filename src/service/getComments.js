import axios from 'axios'

function getComments(pokemonId) {
    const promise = axios.get(backUrl + pokemonId)
    return promise
}

export default getComments
