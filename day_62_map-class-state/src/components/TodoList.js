import React, { Component } from 'react';
import TodoItem from "./TodoItem";
let todos = [
    {
        isComplete: true,
        todo: 'Read a book',
        importance: 20
    },
    {
        isComplete: true,
        todo: 'Learn React.js',
        importance: 100
    },
    {
        isComplete: false,
        todo: 'Learn Node.js',
        importance: 2
    }
]
//arr: reference type
let arr1 = [0, 2]
let arr2 = arr1
arr1[1] = 1
//arr1=[0,1]
//arr2=[0,1]

class TodoList extends Component {
    state = {
        myTodos: todos.slice()
    }
    handleSortWithImportance = () => {
        console.log('clicked');
        this.setState({ myTodos: this.state.myTodos.sort((a, b) => a.importance - b.importance) });
    }
    render() {
        return (
            <section>
                {this.state.myTodos.map((elt, i) => <TodoItem
                    key={i}
                    todo={elt.todo}
                    isComplete={elt.isComplete}
                    importance={elt.importance}
                />)}
                <button onClick={this.handleSortWithImportance}>sort With importance</button>
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