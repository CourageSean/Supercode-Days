const TodoItem = (props) => {
    return (
        <div>
            <input type="checkbox" name="" id="" checked={props.isComplete} />
            <label htmlFor="">{props.todo}</label>
            <span> :{props.importance}</span>
        </div>
    );
}

export default TodoItem;