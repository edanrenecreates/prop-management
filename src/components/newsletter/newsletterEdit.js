import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {

  onSubmit = (fields) => {

    // if(button == 'submit') {
    //   // Save new newsletter on the backend
    //   console.log('tyring to submit to the backend.');
    // }
    this.props.history.push('/dashboard');
  }
  onCancel = () => {
    ƒ
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div className='new-newsletter'>
        <NewNewsletterForm 
        onCancel={() => this.onCancel()} 
        onSubmit={(event) => this.onSubmit(event)} 
        title='Edit Newsletter'
        />
      </div>
    );
  }
}

export default EditNewsletter;