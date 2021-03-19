import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contacts">contact</Link></li>
                <li><Link to="/blogs">blog</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;