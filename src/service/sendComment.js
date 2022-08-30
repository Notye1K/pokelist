import axios from 'axios'
import backUrl from './backUrl'

function sendComment(data) {
    const promise = axios.post(backUrl, data)
    return promise
}

export default sendComment
