import {
  CHANGE_SELECTED_REQUEST_TYPE
} from './types';

import axions from 'axios';
import { ROOT_URL } from '../config';
import Axios from 'axios';

export function changeSelectedRequestType(boxType) {

  return (
    {
      type: CHANGE_SELECTED_REQUEST_TYPE,
      payload: boxType 
    }
  )
};

export function createNewRequest(newRequest, success) {
  return function() {
    Axios.post=(`${ROOT_URL}/requests/new`, newRequest)
      then(response => {
        console.log(response.data);
        success();
      })
      .catch(err => {
        console.log(err);
      })
  }

}