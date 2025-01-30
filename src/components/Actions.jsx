import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

// Asynchronous action creator (thunk)
export const login = (username, password, redirectTo) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await axios.post('/api/login/', { username, password });
    const user = response.data;
    dispatch(loginSuccess(user));
    // Redirect the user to the specified path
    window.location.href = redirectTo;
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};
