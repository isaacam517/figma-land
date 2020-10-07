import React from 'react';
import { FeaturesContainer, FirstSection, SecoundSection, H2, H3, H4, Img1, Img2, Img3, SpanRow,SpanCol} from './styles';

const FeaturesLigth = () => {
  return (
    <FeaturesContainer>
      <FirstSection>
        <H3>At Your fingertips</H3>
        <H2>Features</H2>
        <H4>Most calendars are designed for teams. Slate is designed for freelancers</H4>
      </FirstSection>
      <SecoundSection>
        <SpanCol>
          <SpanRow>
            <Img1/>
            <H3>The best products start with Sketch</H3>
          </SpanRow>
          <p>
            Slate helps you see how many more days you need to work to reach your
            financial goal.
          </p>
        </SpanCol>
        <SpanCol>
          <SpanRow>
            <Img2/>
            <H3>Fastest way to organize</H3>
          </SpanRow>
          <p>
            Slate helps you see how many more days you need to work to reach your
            financial goal.
          </p>
        </SpanCol>
        <SpanCol>
          <SpanRow>
            <Img3/>
            <H3>Work better together</H3>        
          </SpanRow>
          <p>
            Slate helps you see how many more days you need to work to reach your
            financial goal.
          </p>
        </SpanCol>
      </SecoundSection>
    </FeaturesContainer>
  );
}

export default FeaturesLigth;
