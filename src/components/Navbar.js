import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Ozbek Kitapevi
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Tüm Kitaplar
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">
                            Yeni Kitap Ekle
                </Link>
                    </li>
                </ul>


            </div>
        </nav>
    );
}

