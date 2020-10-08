import React from 'react';
import { PrincingContainer, SectionCard, Card, CardRight, SectionPricing, Pricing, SpanPricing, ButtonCard, ButtonCardRight, H3, H5, H1, CardTitle  } from './styles';
import { H2, H4 } from '../Reusable/styles';


const PrincingLigth = () => {
  return (
    <PrincingContainer>
      <H2>Princing</H2>
      <H4>
        Most calendars are designed for teams. 
        Slate is designed for freelancers
      </H4>
      <SectionCard>
        <Card>
          <CardTitle>
            <H3>Free</H3>
            <H5>Organize across all apps by hand</H5>
          </CardTitle>
          <SectionPricing>
            <Pricing>
              <H1>0</H1>
                <SpanPricing>
                  <H3>$</H3>
                  <H5>Per Month</H5>
                </SpanPricing>
            </Pricing>
          </SectionPricing>
          <ButtonCard>Order Now</ButtonCard>
        </Card>
        <Card>
          <CardTitle>
            <H3>STANDARD</H3>
            <H5>Organize across all apps by hand</H5>
          </CardTitle>
          <SectionPricing>
            <Pricing>
              <H1>10</H1>
                <SpanPricing>
                  <H3>$</H3>
                  <H5>Per Month</H5>
                </SpanPricing>
            </Pricing>
          </SectionPricing>
          <ButtonCard>Order Now</ButtonCard>
        </Card>
        <CardRight>
          <CardTitle>
            <H3>BUSINESS</H3>
            <H5>Organize across all apps by hand</H5>
          </CardTitle>
          <SectionPricing>
            <Pricing>
              <H1>99</H1>
              <SpanPricing>
                <H3>$</H3>
                <H5>Per Month</H5>
              </SpanPricing>
            </Pricing>
          </SectionPricing>
          <ButtonCardRight>Order Now</ButtonCardRight>

        </CardRight>
      </SectionCard>

    </PrincingContainer>
  );
}

export default PrincingLigth;
