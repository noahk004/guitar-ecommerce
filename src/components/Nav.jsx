import logo from '/src/assets/guitars.png'
import userIcon from '/src/assets/user.svg'
import cartIcon from '/src/assets/cart.svg'

import { Link } from 'react-router-dom'



export default function Nav() {
    const navItemStyle = {
        fontSize: '1em',
    }

    return (
        <nav className="nav-bar d-flex align-items-center container-fluid justify-content-between shadow">
            <div className="d-flex align-items-center">
                <Link to="/" className="d-flex navbar-brand">
                    <img className="rounded-4 m-1 ms-3 me-4" width='160' height='80' src={logo} alt="Logo" />
                </Link>
                <div className="d-flex gap-3">
                    <Link className="nav-link p-3" style={navItemStyle} to="/">Home</Link>
                    <Link className="nav-link p-3" style={navItemStyle} to="/shop">Shop</Link>
                    <Link className="nav-link p-3" style={navItemStyle} to="/about">About</Link>
                </div>
            </div>
            
            <div className='d-flex'>
                <Link className="nav-link p-3 me-2 d-flex gap-3" style={navItemStyle}  to="/shop/cart">
                    <img src={cartIcon} width='25px' alt="Sign in" />
                    <div>Cart</div>
                </Link>
                <Link className="nav-link p-3 me-2 d-flex gap-3" style={navItemStyle} >
                    <img src={userIcon} width='25px' alt="Sign in" />
                    <div>Sign In</div>
                </Link>
            </div>
            
        </nav>
    )
}