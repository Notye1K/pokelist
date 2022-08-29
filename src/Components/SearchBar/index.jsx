import {
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SearchBar() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleMouseDown = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <FormControl
                sx={{
                    m: 1,
                    width: '25ch',
                    background: 'white',
                    borderRadius: '5px',
                }}
                variant="filled"
            >
                <InputLabel htmlFor="filled-adornment-pokemon">
                    Pokemon
                </InputLabel>
                <FilledInput
                    id="filled-adornment-pokemon"
                    type={'text'}
                    value={input}
                    sx={{ background: 'white' }}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            navigate('/' + input)
                        }
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search pokemon"
                                onClick={() => navigate('/' + input)}
                                onMouseDown={handleMouseDown}
                                edge="end"
                            >
                                <SearchIcon sx={{ background: 'white' }} />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Pokémon"
                />
            </FormControl>
        </>
    )
}

export default SearchBar
