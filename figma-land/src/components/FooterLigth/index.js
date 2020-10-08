import React from 'react';
import { FooterContainer, SectionPages, Location, AddressFooter, Map } from './styles';
import { H3, A, AreaContact, SectionAddress, Address1, Icon, ImgGpsIn, ImgGpsOut, TextAddress, Address2, ImgFone, Address3, ImgEmail, ImgTwitter, ImgFace, ImgLinkedin, H5, AreaIcon } from '../Reusable/styles';

const FooterLigth = () => {
  return (
    <FooterContainer>
      <SectionPages>
        <H3>Pages</H3>
        <A>Eleanor Edwards</A>
        <A>Ted Robertson</A>
        <A>Annette Russell</A>
        <A>Jennie Mckinney</A>
        <A>Gloria Richards</A>
      </SectionPages>
      <Location>
        <Map/>
      </Location>
      <AddressFooter>
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
      </AddressFooter>

    </FooterContainer>
  );
}

export default FooterLigth;
