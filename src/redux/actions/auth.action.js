import * as types from '../constants/auth.constant'
import {alertActions} from "./alert.action"
// import api from '../api'
import firebase from '../../containers/Firebase/index'

const loginRequest = ({email, password}) => async (dispatch) => {
  dispatch({type: types.LOGIN_REQUEST, payload: null})

  try {
    let response = await firebase.doSignInWithEmailAndPassword(email, password)
    dispatch({type: types.LOGIN_REQUEST_SUCCESS, payload: response.user})

    // api.defaults.headers.common['authorization'] = "Bearer " + response.refreshToken
    dispatch(alertActions.setAlert(`Welcome back, ${response.user.email}`, "success"));

  }catch (error){
    dispatch({type: types.LOGIN_REQUEST_FAILURE, payload: error})
    dispatch(alertActions.setAlert('Failed to login', 'danger'))
  }
}

const registerRequest = ({name, location, email, password}) => async (dispatch) => {
  dispatch({type: types.REGISTER_REQUEST, payload: null})
  try{
    let response = await firebase.doCreateUserWithEmailAndPassword(location, name, email, password)
    console.log(response)
    dispatch({type: types.REGISTER_REQUEST_SUCCESS, payload: response.user})
  }catch (error){
    dispatch({type: types.REGISTER_REQUEST_FAILURE, payload: error})
  }
}

const logout = () => async (dispatch) => {
  localStorage.setItem("accessToken", "")
  let response = await firebase.doSignOut()
  dispatch({type: types.LOGOUT, payload: response})
}

export const authActions = {
  loginRequest: loginRequest,
  registerRequest: registerRequest,
  logout: logout
}