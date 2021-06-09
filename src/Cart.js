import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Cart = () => {
    return (
            <div>
              <h2>This is your cart.</h2>
              <Link to="/checkout">
                  <h2>Checkout Cart</h2>
              </Link>
            </div>
    )
}

export default Cart;