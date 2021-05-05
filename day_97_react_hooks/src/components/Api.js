import { useEffect, useState } from "react";

const Api = () => {
    const [count, incrementCount] = useState(1)
    const [isLogged, setIsLogged] = useState(true)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //     console.log('todo')
    // })
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        console.log('todo')
    }, [count])
    useEffect(() => {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(json => console.log(json))
        console.log('starwars')
    }, [])
    return (
        <section>
            {'🆘'.repeat(count)}
            <div>
                <button onClick={() => incrementCount(count + 1)}><p>Help</p></button>
            </div>
            {isLogged ? '😁' : '🥲'}
            <div>
                <button onClick={() => setIsLogged(!isLogged)}><p>change</p></button>
            </div>
            <div>
                <button onClick={() => {
                    setIsLogged(!isLogged)
                    incrementCount(count + 1)
                }}><p>help and change</p></button>
            </div>
        </section>
    );
}

export default Api;