import React from 'react';
import { Button } from 'react-bootstrap';
import '../styling/navbar.scss';
import '../styling/globals.scss';
export const Nav = () => {
    return(
        <nav className="header-container">
            <div><p>Logo</p></div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div>
                <p><Button variant="light">More Info</Button></p>
            </div>
        </nav>
    );
}
