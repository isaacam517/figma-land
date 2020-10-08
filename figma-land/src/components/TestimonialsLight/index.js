import React from 'react';
import { TestimonialsContainer, H4, H5, ImgDropBox, ImgEllipse, ButtonMore, Section, SectionUI } from './styles';
import { H2, A } from '../Reusable/styles';

const TestimonialsLigth = () => {
  return (
    <TestimonialsContainer>
      <H2>Testimonials</H2>
      <ImgDropBox/>
      <H4>
        Most calendars are designed for teams. Slate is designed for freelancers 
        who want a simple way to plan their schedule.
      </H4>
      <Section>
        <ImgEllipse/>
        <SectionUI>
          <H5>Organize across</H5>
          <A href="">Ui designer</A>
        </SectionUI>
      </Section>
      <ButtonMore>More Testimonials</ButtonMore>
    </TestimonialsContainer>
  );
}

export default TestimonialsLigth;
