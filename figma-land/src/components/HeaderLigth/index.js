import React from 'react';
import { HeaderContainer, ImgLogo, Button, Input, DivTop, DivBanner, ImgBanner, H1, H4, DivText, ButtonTry, DivColor } from './styles';



const HeaderLight = () => {
  return (
    <HeaderContainer>
     
        <DivTop>
          <ImgLogo/>      
          <a href="">Home</a>        
          <a href="">Product</a>        
          <a href="">Pricing</a>        
          <a href="">About</a>        
          <a href="">Contact</a>        
          <Input placeholder="Your Email"/>
          <Button>
            Subscribe
          </Button>
        </DivTop>
        <DivBanner>
          <ImgBanner />
          <DivText>
            <H1>We focus on ergonomics</H1>
            <H4>Most calendars are designed for teams. Slate is designed for freelancers</H4>
            <ButtonTry>Try For Free</ButtonTry>
          </DivText>
        </DivBanner>
        <DivColor>          
        </DivColor>   
    </HeaderContainer>
  );
}

export default HeaderLight;
