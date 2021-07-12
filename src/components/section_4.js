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
            <div className="container4-image">
                <img 
                    src={mountain} 
                    alt={mountain} 
                    loading="lazy"
                    className="container4-hover"/>
                <div className="container4-info">
                    <div className="text">
                        <h3>The Mountains</h3>
                        <small>By John Smith</small>
                        <h4>READ STORY</h4>
                    </div>
                </div>
            </div>

            <div className="container4-image">
                <img 
                    src={buildings} 
                    alt={buildings} 
                    loading="lazy"
                    />
                <div className="container4-info">
                    <div className="text">
                        <h3>Cityscapes</h3>
                        <small>By Frank Ocean</small>
                        <h4>READ STORY</h4>
                    </div>
                </div>
            </div>

            <div className="container4-image">
                <img 
                    src={voyage} 
                    alt={voyage} 
                    loading="lazy"
                    />
                <div className="container4-info">
                    <div className="text">
                        <h3>22 Day Voyage</h3>
                        <small>By Alexander Gordon</small>
                        <h4>READ STORY</h4>
                    </div>
                </div>
            </div>
            <div className="container4-image">
                <img 
                    src={arch} 
                    alt={arch} 
                    loading="lazy"
                    />
                <div className="container4-info">
                    <div className="text">
                        <h3>Architecture</h3>
                        <small>By Sam Smith</small>
                        <h4>READ STORY</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}