import React from 'react';
import {ReactComponent as Com} from '../svg/computer.svg';
import {ReactComponent as Dia} from '../svg/diagram.svg';
import {ReactComponent as Arrow} from '../svg/arrow.svg';
import '../styling/globals.scss';
import '../styling/section_5.scss';

export const Section5 = () => {
    return(
        <section className="container5">
            <div className="info">
                <Com className="icon"/>
                <h2>100% Responsive</h2>
                <p>Nullam mauris ligula, accumsan et nisi et, fringilla tristique enim. 
                    Nullam volutpat facilisis erat, ac blandit urna pulvinar ultrices. </p>
            </div>
            <div className="info">
                <Arrow className="icon"/>
                <h2>No Photo Upload Limit</h2>
                <p>Aliquam consequat ligula leo, sed mattis ante tincidunt at. 
                    Praesent efficitur laoreet risus, fringilla pulvinar nisl scelerisque vitae. </p>
            </div>
            <div className="info">
                <Dia className="icon"/>
                <h2>Available to Embed</h2>
                <p>Estibulum vestibulum et nisi sit amet laoreet. 
                    Praesent commodo velit nec suscipit bibendum. 
                    Cras in feugiat tortor, ut faucibus libero.</p>
            </div>
        </section>
    );
}