import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
  render() {

    const latest = {
      __id: '115',
      title: 'Happy Holidays!',
      body: 'Aute man braid aliquip, tempor bushwick ipsum synth whatever biodiesel adaptogen keytar. Air plant PBRB subway tile chicharrones gentrify iceland post-ironic. Whatever church-key velit locavore deserunt sunt pok pok. Bespoke trust fund locavore yuccie lomo messenger bag. Man braid yuccie quis man bun veniam glossier reprehenderit meh vaporware ex af butcher in forage aesthetic. Keytar disrupt lo-fi scenester ex pork belly crucifix raw denim deep v.',
      date: new Date(),
      imageUrl: 'http://via.placeholder.com/960x258'
    }
    return(
      <div className='newsletter-grid'>
        {/* Add button */}
        <NewsletterBox date={new Date()}/>
        <NewsletterArchive/>
        <NewsletterLatest {...latest}/>
      </div>
    )
  }
}

export default NewsletterGrid;