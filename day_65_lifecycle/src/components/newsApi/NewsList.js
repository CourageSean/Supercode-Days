import React, { Component } from 'react';
import axios from 'axios'
import NewsItem from './NewsItem';

class NewsList extends Component {
    state = {
        data: [],
        category: 'business'
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=${this.state.category}&apiKey=3060deabfb6d4a2e9867e0d2004a5f88`)
            .then((response) => {
                console.log(response)
                this.setState({ data: response.data.articles });

            })
            .catch((error) => console.log(error))

    }
    componentDidUpdate() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=${this.state.category}&apiKey=3060deabfb6d4a2e9867e0d2004a5f88`)
            .then((response) => {
                console.log(response)
                this.setState({ data: response.data.articles });

            })
            .catch((error) => console.log(error))
    }
    // https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3060deabfb6d4a2e9867e0d2004a5f88
    render() {
        return (
            <main>
                <nav>
                    <ul>
                        <button onClick={() => this.setState({ category: 'business' })}>business</button>
                        <button onClick={() => this.setState({ category: 'sports' })}>Sports</button>
                        <button onClick={() => this.setState({ category: 'science' })}>science</button>
                    </ul>
                </nav>
                <section className="grid">
                    {this.state.data && this.state.data.map((elt, i) => <NewsItem
                        key={i}
                        title={elt.title}
                        urlToImage={elt.urlToImage}
                        url={elt.url}
                    />)}
                </section>
            </main>
        );
    }
}

export default NewsList;