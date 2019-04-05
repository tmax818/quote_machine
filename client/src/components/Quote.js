import React from 'react';
import Image from './Image';

const Quote = ({ quote, fetchFacts, author }) => {
  return (
    <div id="quote-box">
      <Image />
      <h3 id="text">{quote}</h3>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={fetchFacts}>
        Next
      </button>
      <a
        id="tweet-quote"
        href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456"
      >
        Tweet
      </a>
    </div>
  );
};

export default Quote;
