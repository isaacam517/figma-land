import React from 'react';
import { CTAContainer, InputEmail, Button } from './styles';
import { H2, H3, P } from '../Reusable/styles';

const LigthCTA = () => {
  return (
    <CTAContainer>
     <H3>At your fingertips</H3>
     <H2>Lightning fast prototyping</H2>
     <H3>Subscribe to our Newsletter</H3>
     <P>Available exclusivery on Figmaland</P>
     <InputEmail placeholder="Your Email"/>
     <Button>Subscribe</Button>
    </CTAContainer>
  );
}

export default LigthCTA;
