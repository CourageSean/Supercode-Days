import React, { Component } from 'react';
import ContactItem from './ContactItem';
import contacts from './contacts.json'
console.log(contacts)


class ContactsList extends Component {
    state = {
        contacts: contacts.slice(0, 5)
    }
    handleAddRandom = () => {
        //console.log(contacts[Math.floor(Math.random() * contacts.length)])
        let newContact = contacts[Math.floor(Math.random() * contacts.length)]
        //method-1
        // let contacts = this.state.contacts.slice()
        // contacts.push(newContact)
        // this.setState({ contacts: contacts });
        //method-2
        this.setState({ contacts: [...this.state.contacts, newContact] });

    }
    handleSortByName = () => {
        let contacts = this.state.contacts.sort((a, b) => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1
            else if (a.name.toUpperCase() < b.name.toUpperCase()) return -1
            else return 0
        })
        this.setState({ contacts });
    }
    handleSortByPopularity = () => {
        let contacts = this.state.contacts.sort((a, b) => {
            if (a.popularity > b.popularity) return -1
            else if (a.popularity < b.popularity) return 1
            else return 0
        })
        this.setState({ contacts });
    }
    handleDelete = (name) => {
        console.log(name)
        let contacts = this.state.contacts.filter(elt => elt.name !== name)
        this.setState({ contacts });
    }
    handleInput = (event) => {
        this.setState({ search: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let contacts = this.state.contacts.filter(elt => elt.name == this.state.search)
        this.setState({ contacts });
    }
    render() {
        const listContact = this.state.contacts.map((contact, i) => <ContactItem
            contact={contact}
            handleDelete={() => this.handleDelete(contact.name)}
            key={i}
        />)
        return (
            <section>
                <button onClick={this.handleAddRandom}>Add Random</button>
                <button onClick={this.handleSortByName}>By Name</button>
                <button onClick={this.handleSortByPopularity}>By Popularity</button>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="" id=""
                        value={this.state.search}
                        onChange={this.handleInput}
                    />
                    <input type="submit" value="search" />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContact}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default ContactsList;