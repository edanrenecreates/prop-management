import React, { Component } from 'react';

import Icon from '../../icon';
import Button from '../button';

class RequestsItem extends Component {

  render() {
    return (
      <div className='requests-item'>
        <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
        <div className='requests-item__title'>
          <div className='requests-item__title__text' >Yo my door fell down</div>
          <Icon className='requests-item__title__arrow' icon='fas fa-sort-down' />
        </div>
        <div className='requests-item__tenant-unit'>
          Tom - Unit 220
        </div>
    
        <div className='requests-item__date'>
          10/16/1997
        </div>
        <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna to move the item')} />
        
        <div className='requests-item__description'>
          <img 
          className="requests-item__description-img" 
          src='http://via.placeholder.com/160x95'
          />
          <p className='requests-item__description-text'>
            I'm baby everyday carry iceland la croix sustainable 90's, cray flexitarian.I'm baby everyday carry iceland la croix sustainable 90's, cray flexitarian.I'm baby everyday carry iceland la croix sustainable 90's, cray flexitarian.
          </p>
        </div>
      </div>
    )
  }
}

export default RequestsItem;