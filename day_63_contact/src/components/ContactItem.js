const ContactItem = (props) => {
    // console.log(props)
    return (
        <tr>
            <td><img src={props.contact.pictureUrl} alt="" /></td>
            <td>{props.contact.name}</td>
            <td>{props.contact.popularity}</td>
            <td><button onClick={props.handleDelete}>delete</button></td>
        </tr>
    );
}

export default ContactItem;