import BlogItem from './BlogItem.js';
import React, { Component } from 'react';
import data from './data/data.js'
console.log(data)
class BlogsList extends Component {
    state = { data: data.slice(), title: '' }

    add = () => {
        localStorage.setItem('data', this.state.data)
    }
    // componentDidMount() {
    //     let data = localStorage.getItem('data')
    //     console.log(JSON.parse(data))
    // }
    render() {
        return (
            <main>
                <button onClick={this.add}>Add</button>
                <section className="grid">
                    {/* {this.state.data.map(elt => <BlogItem key={elt.id} id={elt.id} title={elt.title} img_url={elt.img_url} />)} */}
                </section>
            </main>);
    }
}


export default BlogsList;