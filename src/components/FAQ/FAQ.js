import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} image={faqContents.image} />
    <h2>{faqContents.faqTitle}</h2>
    <p>{faqContents.faqText}</p>
    <h2>{faqContents.faqTitle1}</h2>
    <p>{faqContents.faqText2}</p>
    <h2>{faqContents.faqTitle2}</h2>
    <p>{faqContents.faqText2}</p>
  </Container>
);

export default FAQ;
