import React from 'react';
import filming from '../images/filming.jpeg';
import '../styling/globals.scss';
import '../styling/section_3.scss';

export const Section3 = () => {
    return(
        <section className="section3_container">
        <div className="context">
            <h1>DESIGN FOR <br/> EVERYONE</h1>
            <p>Nullam lobortis ac tortor ut iaculis. Sed mi purus, hendrerit non lacus id, dapibus ullamcorper metus. Quisque id pretium metus, eu euismod erat. 
                Fusce in mi venenatis, elementum ante et, convallis lacus. Vestibulum in varius quam, ut malesuada orci.</p>
        </div>
        
        <img src={filming} alt={filming} className="image" loading="lazy"/>
    </section>
    )
}