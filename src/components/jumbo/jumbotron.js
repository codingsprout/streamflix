import React from 'react';
import {
  Container,
  Inner,
  Box,
  Title,
  SubTitle,
  Image,
  Data,
} from './jumbostyle';

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Data {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Data>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Box = function JumbotronBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
