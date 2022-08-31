import axios from 'axios'
import backUrl from './backUrl'

function getComments(pokemonId) {
    const promise = axios.get(backUrl + pokemonId+'/comments')
    return promise
}

export default getComments
