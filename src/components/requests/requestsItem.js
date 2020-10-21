import React, { Component } from 'react';

import Icon from '../../icon';
import Button from '../button';

class RequestsItem extends Component {

  render() {
    return (
      <div className='requests-item'>
        <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
        <div className='requests-item__title'>
          The bathroom sink is clogged
        </div>
        <div className='requests-item__tenant-unit'>
          Tom - Unit 220
        </div>
        <Icon className='requests-item__arrow' icon='fas fa-sort-down'/>
        <div className='requests-item__date'>
          10/16/1997
        </div>
        <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna to move the item')} />
      </div>
    )
  }
}

export default RequestsItem;