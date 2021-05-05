import React, { useState, useContext } from 'react';
import appContext from '../contexts/appContext'
import Mode from "./Mode";
const contactsArr = ['spiderman', 'wonderwoman', 'Batman']


const Contacts = (props) => {
    const [contactsState, setcontactsState] = useState(contactsArr)
    const [newContact, setNewContact] = useState('')
    //const [isLight, changeIsLight] = useState(true)
    const { message } = useContext(appContext)
    return (
        <section style={{ backgroundColor: props.isLight ? '#ddd' : '#333', color: props.isLight ? '#333' : '#ddd' }}>
            <ul>
                {contactsState.map((elt, i) => <li key={i}>{elt}</li>)}
            </ul>
            <form action="">
                <input
                    type="text"
                    name="" id=""
                    onChange={e => setNewContact(e.target.value)}
                    value={newContact}
                />
                <input
                    type="button"
                    value="Add Contact"
                    onClick={() => {
                        //syntax1
                        setcontactsState([...contactsState, newContact])
                        //syntax2
                        // let newArr=contactsState.slice()
                        // newArr.push(newContact)
                        // setcontactsState(newArr)
                    }}
                />
            </form>
            <Mode changeIsLight={props.changeIsLight} isLight={props.isLight} />
            <h1>{message}</h1>
        </section>
    );
}



export default Contacts;