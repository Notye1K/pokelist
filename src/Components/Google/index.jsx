import { useContext, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import Container from './style'
import AlertContext from '../AlertContext'

function Google({ setUser, user }) {
    const { setMessage, setOpen } = useContext(AlertContext)

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: import.meta.env.VITE_ID_CLIENT,
                scope: 'email',
            })
        }
        gapi.load('client:auth2', start)
    }, [])

    const onSuccess = (response) => {
        const user = JSON.stringify(response.profileObj)
        localStorage.setItem('user', user)
        setUser(response.profileObj)
    }
    const onFailure = (response) => {
        console.log('FAILED', response)
        setMessage('login has failed')
        setOpen(true)
    }
    const onLogoutSuccess = () => {
        localStorage.removeItem('user')
        setUser('Sign-in to comment')
    }
    return (
        <Container>
            {(user === 'Sign-in to comment' || !user) && (
                <GoogleLogin
                    clientId={import.meta.env.VITE_ID_CLIENT}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            )}
            {(user !== 'Sign-in to comment' || user === null) && (
                <GoogleLogout
                    clientId={import.meta.env.VITE_ID_CLIENT}
                    onLogoutSuccess={onLogoutSuccess}
                />
            )}
        </Container>
    )
}

export default Google
