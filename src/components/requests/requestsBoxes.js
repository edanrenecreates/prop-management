import React, { Component } from 'react';

import { connect } from 'react-redux';

import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
  render() {
    return (
      <div className='requests-boxes'>
        <RequestsBox title={'pending'} count={this.props.pendingCount}/>
        <RequestsBox title={'in-progress'} count={this.props.progressCount}/>
        <RequestsBox title={'complete'} count={this.props.completeCount}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { requests } = state.requests

  let pendingCount = 0;
  let progressCount = 0;
  let completeCount = 0;
  
  requests.map(request => {
      if(request.stats == 'pending') {
        pendingCount += 1;
      }else if(request.status == 'progress') {
        progressCount += 1; 
      }else if(request.status == 'complete') {
         completeCount += 1;
      }
    })
  return {
    pendingCount,
    progressCount,
    completeCount
  }
}

RequestsBoxes = connect(mapStateToProps)(RequestsBoxes);

export default RequestsBoxes;