import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Counter</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/login">LogIn</Link>
                </li>
                <li>
                    <Link to="/api">Api</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;