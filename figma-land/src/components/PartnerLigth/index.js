import React from 'react';
import { PartnersContainer,SecoundSection, SpanCol, Img3, Img2, Img1, P  } from './styles';
import { H2, H4, H5, ButtonTryBlue, } from '../Reusable/styles';

const PartnersLigth = () => {
  return (
    <PartnersContainer>
     <H2>Partners</H2>
     <H4>Most calendars are designed for teams. Slate is designed for freelancers</H4>
     <SecoundSection>
        <SpanCol>          
          <H5>Client Name</H5>          
          <Img1/>
          <P>
            Slate helps you see how many more days you need to work to reach your 
            financial goal for the month and year.
          </P>
        </SpanCol>
        <SpanCol>          
            <H5>Client Name</H5> 
            <Img2/>          
          <P>
            Slate helps you see how many more days you need to work to reach your 
            financial goal for the month and year.
          </P>
        </SpanCol>
        <SpanCol>         
            <H5>Client Name</H5>         
            <Img3/>         
          <P>
            Slate helps you see how many more days you need to work to reach your 
            financial goal for the month and year.
          </P>
        </SpanCol>
      </SecoundSection>
     <ButtonTryBlue>Try For Free</ButtonTryBlue>
    </PartnersContainer>
  );
}

export default PartnersLigth;
