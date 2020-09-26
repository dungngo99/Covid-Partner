import * as types from '../constants/auth.constant'
import {alertActions} from "./alert.action"
import api from '../api'
import * as firebase from 'firebase/app'

const loginRequest = ({email, password}) => async (dispatch) => {
  dispatch({type: types.LOGIN_REQUEST, payload: null})

  try {
    
  }catch (error){
    dispatch({type: types.LOGIN_REQUEST_FAILURE, payload: error})
  }
}

export const authActions = {
  loginRequest: loginRequest,
}