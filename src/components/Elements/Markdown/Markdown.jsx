import React from 'react';
import marked from 'marked';

import './Markdown.scss';

const Markdown = ({ content }) => {
  const getStaticContent = () => {
    const rawMarkup = marked(content);
    return { __html: rawMarkup };
  };

  return (
    <div
      className='Markdown'
      dangerouslySetInnerHTML={getStaticContent()}
    />
  );
};

export default Markdown;
