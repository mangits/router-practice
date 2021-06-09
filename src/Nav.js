import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = ({ history }) => {
    console.log(history)
    return (
            <nav>
                <ul>
                    <Link to="/">
                            <h2>Home</h2>
                    </Link>
                    <Link to="/about">
                            <h2>About</h2>
                    </Link>
                    <Link to="/shop">
                            <h2>Shop</h2>
                    </Link>
                    <Link className="cart" to="/cart">
                            <h2>View 🛒</h2>
                    </Link>
                </ul>
            </nav>
    )
}

export default Nav;