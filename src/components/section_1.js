import React from 'react';
import avi from '../images/avi.jpeg';
import '../styling/section_1.scss';
import '../styling/globals.scss';

export const Section1 = () => {
    return(
        <section className="section1_container">
        <div className="context">
            <h1>CREATE AND <br/> SHARE YOUR <br/> PHOTO STORIES.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dapibus orci. Quisque lacinia eu orci id faucibus. 
                Maecenas accumsan pellentesque dignissim. </p>
        </div>
        
        <img src={avi} alt={avi} className="image"/>
    </section>
    );
}