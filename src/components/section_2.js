import React from 'react';
import writing from '../images/writing.jpeg';
import '../styling/globals.scss';
import '../styling/section_2.scss';

export const Section2 = () => {
    return(
        <section className="section2_container">
        <img src={writing} alt={writing} className="image" loading="lazy"/>
        <div className="context">
            <h1>BEAUTIFUL <br/> STORIES <br/> EVERY TIME</h1>
            <p>Curabitur at augue sagittis, tincidunt mi quis, luctus nisl. Nam vulputate est a mi facilisis, nec accumsan orci molestie. Morbi nec cursus nulla. 
                Quisque et ligula sit amet massa ultrices ornare. Fusce leo diam, vulputate eu risus eu, facilisis ultrices odio.</p>
        </div>
    </section>
    );
}