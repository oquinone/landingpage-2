import React from 'react';
import { Button, Dropdown} from 'react-bootstrap';
import '../styling/navbar.scss';
import '../styling/globals.scss';

import {ReactComponent as List} from '../svg/list.svg';

export const Nav = () => {
    return(
        <nav className="header-container">
            <div className="header-container-site">
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
            </div>
            <div className="header-container-mobile">
                <div>
                    <h1>Logo</h1>
                </div>

                <div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <List/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Stories</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Features</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        </nav>
    );
}
