import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} image={infoContents.image} />
    {infoContents.info}
    <h2>{infoContents.infoTitle}</h2>
    <p>{infoContents.infoText}</p>
    {infoContents.contact}
    <h2>{infoContents.contactTitle}</h2>
    <p>{infoContents.contactText}</p>
    <ul>
      <li>{infoContents.contactTel}</li>
      <li>{infoContents.contactEmail}</li>
    </ul>
  </Container>
);

export default Info;
