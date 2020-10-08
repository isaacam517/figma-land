import React from 'react';
import { HeaderContainer, ImgLogo, Button, Input, DivTop, DivBanner, ImgBanner, ButtonTryWhite, H1, H4, DivText, DivColor, SpanImg, SpanNav, NavMenu } from './styles';




const HeaderLight = () => {
  return (
    <HeaderContainer>
        <DivColor/>   
        <DivTop>
          <SpanImg>
            <ImgLogo/>
          </SpanImg>
          <SpanNav>
            <a href="https://github.com/isaacam517">Home</a>        
            <a href="https://github.com/isaacam517">Product</a>        
            <a href="https://github.com/isaacam517">Pricing</a>        
            <a href="https://github.com/isaacam517">About</a>        
            <a href="https://github.com/isaacam517">Contact</a>        
            <Input placeholder="Your Email"/>
            <Button>
              Subscribe
            </Button>
          </SpanNav>
        </DivTop>
        <NavMenu/>
        <DivBanner>
          <ImgBanner />
          <DivText>
            <H1>We focus on ergonomics</H1>
            <H4>Most calendars are designed for teams. Slate is designed for freelancers</H4>
            <ButtonTryWhite>Try For Free</ButtonTryWhite>
          </DivText>
        </DivBanner>
    </HeaderContainer>
  );
}

export default HeaderLight;
