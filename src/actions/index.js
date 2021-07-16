import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';


export const startFetch = () => {
  return({ type: FETCHING_START });
}

export const fetchSmurfs = () => {
  
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      return({ type: FETCHING_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)

      return({ type: FETCHING_FAIL, payload: err })
    })
}

export const addSmurf = () => dispatch => {
  dispatch({ type: ADD_SMURF });
}

export const setError = () => dispatch => {
  dispatch({ type: ERROR_MESSAGE })
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

//3. Add a standard action that allows us to set the value of the error message slice of state.