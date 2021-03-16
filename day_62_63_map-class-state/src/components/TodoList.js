import React, { Component } from 'react';
import TodoItem from "./TodoItem";
let todos = [
    {
        id: 0,
        isComplete: true,
        todo: 'Read a book',
        importance: 2
    },
    {
        id: 1,
        isComplete: true,
        todo: 'Learn React.js',
        importance: 9
    },
    {
        id: 2,
        isComplete: false,
        todo: 'Learn Node.js',
        importance: 1
    },
    {
        id: 3303003030030031045,
        isComplete: true,
        todo: 'Go To Maui',
        importance: 3
    },
    {
        id: 4,
        isComplete: false,
        todo: 'Play Music',
        importance: 5
    }
]
// //arr: reference type
// let arr1 = [0, 2]
// let arr2 = arr1
// arr1[1] = 1
// //arr1=[0,1]
// //arr2=[0,1]

class TodoList extends Component {
    state = {
        myTodos: todos.slice(),
        valueInput: '',
        valueImportance: 5,
        importanceAscending: true,
        alphabeticallyAscending: true
        // myTodos: [...todos]
    }
    handleSortWithImportance = () => {
        console.log('clicked');
        if (this.state.importanceAscending) {
            let newTodos = this.state.myTodos.sort((a, b) => a.importance - b.importance).reverse()
            this.setState({ myTodos: newTodos });
            this.setState({ importanceAscending: !this.state.importanceAscending });
        } else {
            let newTodos = this.state.myTodos.sort((a, b) => a.importance - b.importance)
            this.setState({ myTodos: newTodos });
            this.setState({ importanceAscending: !this.state.importanceAscending });
        }


        // this.setState({ myTodos: this.state.myTodos.sort((a, b) => a.importance - b.importance) });
    }
    handleSortAlphabetically = () => {
        console.log('handleSortAlphabetically')
        let newTodos = this.state.myTodos.sort((a, b) => {
            let aTodo = a.todo.toLowerCase()
            let bTodo = b.todo.toLowerCase()
            if (aTodo < bTodo) {
                if (this.state.alphabeticallyAscending) {
                    return -1
                } else {
                    return 1
                }

            } else if (bTodo < aTodo) {
                if (this.state.alphabeticallyAscending) {
                    return 1
                } else {
                    return -1
                }
            } else {
                return 0
            }
        })
        console.log(newTodos)
        this.setState({ myTodos: newTodos });
        this.setState({ alphabeticallyAscending: !this.state.alphabeticallyAscending });
    }
    handleChange = (myParam) => {
        console.log('changed: ' + myParam)
        let newTodos = this.state.myTodos.map(elt => {
            if (elt.id === myParam) {
                elt.isComplete = !elt.isComplete
            }
            return elt
        })
        this.setState({ myTodos: newTodos });
    }
    handleChangeInput = (event) => {
        console.log(event);
        this.setState({ valueInput: event.target.value });
    }
    handleChangeImportance = (event) => {
        console.log(event)
        console.log(event.target.value)
        this.setState({ valueImportance: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let newTodo = {
            id: Date.now(),
            isComplete: false,
            todo: this.state.valueInput,
            importance: this.state.valueImportance
        }
        console.log(newTodo)
        let newTodos = this.state.myTodos.slice()
        newTodos.push(newTodo)
        this.setState({ myTodos: newTodos });
    }
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Todo:
                    <input type="text" value={this.state.valueInput} onChange={this.handleChangeInput} />
                    </label>
                    <label>
                        Importance {this.state.valueImportance}:
                    <input
                            type="range"
                            min="0"
                            max="10"
                            defaultValue={this.state.valueImportance}
                            onChange={this.handleChangeImportance}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.myTodos.map((elt, i) => <TodoItem
                    key={elt.id}
                    todo={elt.todo}
                    isComplete={elt.isComplete}
                    importance={elt.importance}
                    handleChange={() => this.handleChange(elt.id)}
                />)}
                <button onClick={this.handleSortWithImportance}>sort With importance</button>
                <button onClick={this.handleSortAlphabetically}>sort Alphabetically</button>
            </section>
        );
    }
}

export default TodoList;


//Stateless function component
// const TodoList = () => {
//     return (
//         <section>
//             {todos.map((elt, i) => <TodoItem
//                 key={i}
//                 todo={elt.todo}
//                 isComplete={elt.isComplete}
//             />)}
//         </section>
//     );
// }

// export default TodoList;