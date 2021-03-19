import React, { Component } from 'react';
import Counter1 from './Counter1'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: [],
            show: true
        }
        this.changeCounter = this.changeCounter.bind(this);
    }
    delCounter = () => {
        this.setState({ show: false });
    }
    changeCounter() {
        this.setState({ counter: 10 });
    }
    // static getDerivedStateFromProps(props, state) {
    //     return { counter: props.myCounter }
    // }
    shouldComponentUpdate() {
        return true
    }
    // componentDidMount() {
    //     fetch('https://opentdb.com/api.php?amount=10')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({ data: json.results });
    //         })
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('prevProps', prevProps)
    //     console.log('prevState', prevState)
    // }
    componentDidUpdate() {
        console.log('updated')
    }

    render() {
        return (
            <section >
                <button onClick={this.changeCounter}>change</button>
                <button onClick={this.delCounter}>delete</button>
                {this.state.show ? <Counter1 /> : null}

                <div>

                    {this.state.counter}
                </div>
                <section>
                    {this.state.data.map((elt, i) => <h1>{elt.question}</h1>)}
                </section>
            </section>
        );
    }
}

export default Counter;