import { useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import Container from './style'

function Google({ setUser, user }) {
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
        console.log('SUCCESS', response)
        const user = JSON.stringify(response.profileObj)
        localStorage.setItem('user', user)
        setUser(response.profileObj)
    }
    const onFailure = (response) => {
        console.log('FAILED', response)
    }
    const onLogoutSuccess = () => {
        console.log('SUCESS LOG OUT')
        localStorage.removeItem('user')
        setUser('Sign-in to comment')
    }
    console.log(user)
    return (
        <Container>
            {user === 'Sign-in to comment' && (
                <GoogleLogin
                    clientId={import.meta.env.VITE_ID_CLIENT}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            )}
            {user !== 'Sign-in to comment' && (
                <GoogleLogout
                    clientId={import.meta.env.VITE_ID_CLIENT}
                    onLogoutSuccess={onLogoutSuccess}
                />
            )}
        </Container>
    )
}

export default Google
