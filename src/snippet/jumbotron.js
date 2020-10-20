import React from 'react';
import jumboJson from '../jsons/jumbo.json';
import { Jumbotron } from '../components';

export const JumbotronSnippet = () => {
  return (
    <Jumbotron.Container>
      {jumboJson.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <Jumbotron.Box>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Box>

          <Jumbotron.Box>
            <Jumbotron.Image src={data.image} alt={data.alt} />
          </Jumbotron.Box>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};
