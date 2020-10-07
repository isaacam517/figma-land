import React from 'react';
import { HeroContainer, Screen, ScreenBackground, Base, BaseBottom, Grip, DivButton } from './styles';
import { H2, H4, ButtonTryBlue } from '../Reusable/styles';

const HeroLight = () => {
  return (
    <HeroContainer>
      <H2>Lightning fast prototyping</H2>
      <H4>Most calendars are designed for teams. Slate is designed for freelancers</H4>
      <DivButton>
        <ButtonTryBlue>Try For Free</ButtonTryBlue>
      </DivButton>
      <Screen/>
      <ScreenBackground/>
      <Base/>
      <BaseBottom/>
      <Grip/>
    </HeroContainer>
  );
}

export default HeroLight;
