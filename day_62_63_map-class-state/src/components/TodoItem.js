const TodoItem = (props) => {
    // console.log(props)
    return (
        <div>
            <input type="checkbox" name="" id="" checked={props.isComplete} onChange={props.handleChange} />
            <label htmlFor="">{props.todo}</label>
            <span> :{props.importance}</span>
        </div>
    );
}

export default TodoItem;