import axios from 'axios';

import { ROOT_URL } from "../config";

import {
  AUTHENTICATE_USER  
} from './types';

export function signup(fields, success) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, fields)
    .then(response => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.getItem('token');
      console.log(response);
      dispatch({
        type: AUTHENTICATE_USER,
        payload: response.data
      })
      success();
    })
    .catch(err => {
      if(err) {console.log(err)}
    })
  }
}