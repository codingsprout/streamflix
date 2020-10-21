import React from 'react';
import { Accordian } from '../components';
import TrialForm from '../components/trialform/trialform';
import faqsJson from '../jsons/faqs.json';

export const FAQSnippet = () => {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {faqsJson.map((data) => (
        <Accordian.Data key={data.key}>
          <Accordian.Header>{data.header}</Accordian.Header>
          <Accordian.Body>{data.body}</Accordian.Body>
        </Accordian.Data>
      ))}
      <Accordian.Data />

      <TrialForm>
        <TrialForm.Input placeholder='Email Address' />
        <TrialForm.Button>Try it now!</TrialForm.Button>
        <TrialForm.Break />
        <TrialForm.Text>
          Ready? Enter email to create or restart membership
        </TrialForm.Text>
      </TrialForm>
    </Accordian>
  );
};
