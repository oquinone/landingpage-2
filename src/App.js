import React from 'react';
import {Nav} from './components/navbar.js';
import {Section1} from './components/section_1';
import { Section2 } from './components/section_2';
import { Section3 } from './components/section_3';
import { Section4 } from './components/section_4';
import { Section5 } from './components/section_5';
import {Footer } from './components/footer';

const App = () => {
  return (
    <div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
