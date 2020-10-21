import React from 'react';
import {
  Container,
  Err,
  Title,
  Text,
  SmallText,
  Link,
  Input,
  Submit,
  Mattress,
} from './formstyle';

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Err = function FormErr({ children, ...restProps }) {
  return <Err {...restProps}>{children}</Err>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Mattress = function FormMattress({ children, ...restProps }) {
  return <Mattress {...restProps}>{children}</Mattress>;
};

export default Form;
