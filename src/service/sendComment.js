import axios from 'axios'
import backUrl from './backUrl'

function sendComment(data) {
    const promise = axios.post(backUrl+'comment', data)
    return promise
}

export default sendComment
