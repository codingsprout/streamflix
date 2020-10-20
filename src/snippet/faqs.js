import React from 'react';
import { Accordian } from '../components';
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
    </Accordian>
  );
};
