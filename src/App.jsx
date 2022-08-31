import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AlertProvider } from './Components/AlertContext'
import MainPage from './Components/MainPage'
import PokePage from './Components/PokePage'

function App() {
    return (
        <BrowserRouter>
            <AlertProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:pokemon" element={<PokePage />} />
                </Routes>
            </AlertProvider>
        </BrowserRouter>
    )
}

export default App
