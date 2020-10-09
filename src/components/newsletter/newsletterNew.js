import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

  onSubmit = (fields) => {

    // if(button == 'submit') {
    //   // Save new newsletter on the backend
    //   console.log('tyring to submit to the backend.');
    // }
      // this.props.history.push('/dashboard');
      console.log('Trying to submit');
  }
  onCancel = () => {
    console.log('Trying to cancel');
  }
  render() {
    return (
      <div className='new-newsletter'>
        <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/></div>
    )
  }
}

export default NewNewsletter;