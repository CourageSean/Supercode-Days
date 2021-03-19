import React, { Component } from 'react';
class Counter1 extends Component {
    state = {}
    componentWillUnmount() {
        console.log('removed')
    }
    render() {
        return (<section>
            counter1
        </section>);
    }
}

export default Counter1;
