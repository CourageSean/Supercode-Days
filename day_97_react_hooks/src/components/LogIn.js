import { useState, useContext } from "react";
import appContext from '../contexts/appContext'
import Mode from "./Mode";

const LogIn = () => {
    const [isLogged, setIsLogged] = useState(true)
    //const [isLight, changeIsLight] = useState(true)
    const { isLight1, changeIsLight1, colors, message, changeMessage } = useContext(appContext)
    console.log(useContext(appContext))
    return (
        <section style={{ backgroundColor: isLight1 ? colors.light : colors.dark, color: isLight1 ? colors.dark : colors.light }}>
            <h1>
                you are log{isLogged ? ' in' : ' out'}
            </h1>
            <button onClick={() => setIsLogged(!isLogged)}>Change </button>
            {/* <div className="pt3">
                <button onClick={() => changeIsLight(!isLight)}>Change to {isLight ? 'Dark' : 'Light'} Mode</button>
            </div> */}
            <Mode changeIsLight={changeIsLight1} isLight={isLight1} />
            <h1>{message}</h1>
            <button onClick={() => changeMessage('hello')}>Change Messgae</button>
        </section>
    );
}

export default LogIn;