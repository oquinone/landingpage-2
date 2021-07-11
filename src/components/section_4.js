import React from 'react';
import mountain from '../images/mountain.jpeg';
import buildings from '../images/buildings.jpeg';
import voyage from '../images/voyage.jpeg';
import arch from '../images/architecturals.jpeg';
import '../styling/globals.scss';
import '../styling/section_4.scss';

export const Section4 = () => {
    return(
        <section className="container4">
            <img src={mountain} alt={mountain} loading="lazy"/>
            <img src={buildings} alt={buildings} loading="lazy"/>
            <img src={voyage} alt={voyage} loading="lazy"/>
            <img src={arch} alt={arch} loading="lazy"/>
        </section>
    )
}