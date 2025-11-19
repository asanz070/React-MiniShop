// ECHO is on.
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <h1>MiniShop</h1>
                    </Link>
                    <nav>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
