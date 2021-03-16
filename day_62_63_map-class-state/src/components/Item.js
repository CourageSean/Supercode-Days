const Item = (props) => {
    return (
        <tr
            className={props.isIncome ? 'green' : 'tomato'}
            style={{ color: props.isIncome ? 'green' : 'tomato' }}
        >
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.amount}€</td>
        </tr>
    );
}

export default Item;