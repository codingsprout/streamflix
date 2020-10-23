import React from 'react';
import { useContent } from '../hooks';
import { BrowseSnippet } from '../snippet/browse';
import selectionFilter from '../utility/selection-filter';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowseSnippet slides={slides} />;
}

export default Browse;
