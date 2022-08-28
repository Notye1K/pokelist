import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import PokePage from './Components/PokePage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:pokemon" element={<PokePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
