import React from 'react';
import {ReactComponent as RightArrow} from '../svg/right-arrow.svg';
import "../styling/globals.scss";
import '../styling/footer.scss';

import {ReactComponent as Insta } from '../svg/instagram.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Youtube } from '../svg/youtube.svg';
import { ReactComponent as Discord } from '../svg/discord.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-links-container1">
                    <h1>Logo</h1>
                    <ul className="footer-links-socials">
                        <li> <Insta/> </li>
                        <li> <Twitter/> </li>
                        <li> <Youtube/> </li>
                        <li> <Facebook/> </li>
                        <li> <Discord/> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Stories</li>
                        <li>Features</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <span className="footer-info-arrow">
                    <div><h4>GET AN INVITE </h4></div>
                    <div><RightArrow/></div>
                </span>
                <div className="copyright">
                    <h4>Copright Omar Quinones</h4>
                    </div>
            </div>
        </footer>
    );
}