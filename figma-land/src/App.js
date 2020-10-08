import React from 'react';
import HeaderLight from './components/HeaderLigth';
import FeaturesLigth from './components/FeaturesLigth';
import HeroLight from './components/HeroLigth';
import LigthCTA from './components/LigthCTA';
import PartnersLigth from './components/PartnerLigth';
import PrincingLigth from './components/PricingLight';
import ContactLigth from './components/ContactLigth';
import FooterLigth from './components/FooterLigth';
import TestimonialsLigth from './components/TestimonialsLight';

function App() {
  return (
    <div>
      <div id="home">
        <HeaderLight />        
      </div> 
           
      <div id="product">
        <FeaturesLigth />
      </div>
      
      <HeroLight />
            
      <LigthCTA />      

      <div id="partners">
        <PartnersLigth />
      </div>

      <TestimonialsLigth />
      

      <div id="princing">
        <PrincingLigth />
      </div>
      
      <div id="contato">
        <ContactLigth />
      </div>
      <FooterLigth />     
    </div>
  );
}

export default App;
