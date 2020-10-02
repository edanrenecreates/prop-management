import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';

class NewsletterGrid extends Component {
  render() {
    return(
      <div className='newsletter-grid'>
        {/* Add button */}
        <NewsletterBox date={new Date()}/>
        {/* archive */}
        {/* content */}
      </div>
    )
  }
}

export default NewsletterGrid;