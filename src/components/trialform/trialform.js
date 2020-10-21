import React from 'react';
import { Container, Input, Button, Text, Break } from './trialstyle';

function TrialForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TrialForm.Input = function TrialFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

TrialForm.Button = function TrialFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src='/images/icons/chevron-right.png' alt='right-arrow' />
    </Button>
  );
};

TrialForm.Text = function TrialFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TrialForm.Break = function TrialFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default TrialForm;
