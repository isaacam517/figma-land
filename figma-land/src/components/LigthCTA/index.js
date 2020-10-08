import React from 'react';
import { CTAContainer, InputEmail, Button, H2Mobile, H2Desktop } from './styles';
import { H3, P } from '../Reusable/styles';

const LigthCTA = () => {
  return (
    <CTAContainer>
     <H3>At your fingertips</H3>
     <H2Desktop>Lightning fast prototyping</H2Desktop>
     <H2Mobile>Newsletter</H2Mobile>
     <H3>Subscribe to our Newsletter</H3>
     <P>Available exclusivery on Figmaland</P>
     <InputEmail placeholder="Your Email"/>
     <Button>Subscribe</Button>
    </CTAContainer>
  );
}

export default LigthCTA;
