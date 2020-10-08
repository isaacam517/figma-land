import React from 'react';
import { ContactContainer,  DivButton, Button,  AreaInput, Input, TextArea, A } from './styles';
import { H2, H4, H5, AreaContact, SectionContact, AreaIcon, SectionAddress, Icon, Address1, Address2, Address3, ImgGpsIn, ImgGpsOut, TextAddress, ImgFone, ImgEmail, ImgTwitter, ImgFace, ImgLinkedin } from '../Reusable/styles';
 
const ContactLigth = () => {
  return (
    <ContactContainer>
      <H2>Contact Us</H2>
      <H4>
        Most calendars are designed for teams. Slate is designed for freelancers
      </H4>
      <SectionContact>
        <AreaInput>
          <A>Contact Us</A>
          <Input placeholder="Your Name"/>
          <Input placeholder="Your Email"/>
          <TextArea placeholder="Your Message"/>
          <DivButton>
            <Button>Send</Button>
          </DivButton>
        </AreaInput>
        <AreaContact>
          <SectionAddress>
            <Address1>
              <Icon>
                <ImgGpsIn/>
                <ImgGpsOut/>
              </Icon>
              <TextAddress>
                <H5>6386 Spring St undefined Anchorage,<br/> Georgia 12473 United States</H5>
              </TextAddress>
            </Address1>    
            <Address2>
              <Icon>
                <ImgFone/>
              </Icon>
              <TextAddress>
                <H5>(843) 555-0130</H5>  
              </TextAddress>
            </Address2>    
            <Address3>
              <Icon>
                <ImgEmail/>
              </Icon>
              <TextAddress>
                <H5>willie.jennings@example.com</H5>
              </TextAddress>
            </Address3>    
          </SectionAddress>
          <AreaIcon>
            <ImgTwitter/>
            <ImgFace/>
            <ImgLinkedin/>
          </AreaIcon>
        </AreaContact>
      </SectionContact>
    </ContactContainer>
  );
}

export default ContactLigth;
