import React from 'react';
import { HeaderContainer, ImgLogo, Button, Input, DivTop, DivBanner, ImgBanner, ButtonTryWhite, H1, H4, DivText, DivColor, SpanImg, SpanNav} from './styles';
import Menu from '../Menu';
import {Link} from 'react-scroll';

const HeaderLight = () => {

  
  return (
    <HeaderContainer>
        <DivColor/>   
        <DivTop>
          <SpanImg>
            <ImgLogo/>
          </SpanImg>
          <SpanNav>
            <Link to="home"  smooth={true} offset={100} duration={1500}>
                <a>Home</a>
            </Link>
            
            <Link to="product"  smooth={true} duration={1500}>
                <a>Product</a>
            </Link>

            <Link to="princing"  smooth={true} duration={1500}>
                <a>Pricing</a>                                
            </Link>       
            <Link to="partners"  smooth={true} duration={1500}>
                <a>Partners</a>
            </Link>

            <Link to="contato"  smooth={true} duration={1500}>
            <a>Contact</a>                      
            </Link> 
            <Input placeholder="Your Email"/>
            <Button>
              Subscribe
            </Button>
          </SpanNav>
        </DivTop>
          <Menu/>      
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
