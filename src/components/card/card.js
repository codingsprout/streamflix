import React, { createContext, useContext, useState } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  MaturityRating,
  Content,
  Meta,
  Entity,
  Data,
  Image,
} from './cardstyle';

export const FeatureContext = createContext();

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [dataFeature, setDataFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, dataFeature, setDataFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entity = function CardEntity({ children, ...restProps }) {
  return <Entity {...restProps}>{children}</Entity>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, dataFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${dataFeature.genre}/${dataFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{dataFeature.title}</FeatureTitle>
        <FeatureText>{dataFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='Close' />
        </FeatureClose>
        <Group margin='30px 0' flexDirection='row' alignItems='center'>
          <MaturityRating rating={dataFeature.maturity}>
            {dataFeature.maturity < 12 ? 'PG' : dataFeature.maturity}
          </MaturityRating>
          <FeatureText fontWeight='bold'>
            {dataFeature.genre.charAt(0).toUpperCase() +
              dataFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Data = function CardData({ data, children, ...restProps }) {
  const { setShowFeature, setDataFeature } = useContext(FeatureContext);

  return (
    <Data
      onClick={() => {
        setDataFeature(data);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Data>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Card;
