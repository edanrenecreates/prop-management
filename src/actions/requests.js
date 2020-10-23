import {
  CHANGE_SELECTED_REQUEST_TYPE
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequestType(boxType) {
  return (
    {
      type: CHANGE_SELECTED_REQUEST_TYPE,
      payload: boxType 
    }
  )
};

export function createNewRequest(userId, newRequest, success) {
  console.log('token:', localStorage.getItem('token'));
  console.log('userID', userId);
  // return function() {
  //   Axios.post=(`${ROOT_URL}/requests/new`, newRequest)
  //     then(response => {
  //       console.log(response.data);
  //       success();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

}