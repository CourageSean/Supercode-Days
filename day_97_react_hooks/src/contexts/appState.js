import { useState } from 'react'
import AppContext from './appContext'

const AppState = (props) => {
    const colors = {
        light: 'gold',
        dark: 'tomato'
    }
    const [isLight1, changeIsLight1] = useState(true)
    const [message, changeMessage] = useState('hi')
    return (
        <AppContext.Provider
            value={{
                message,
                changeMessage,
                colors,
                isLight1,
                changeIsLight1
            }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppState;