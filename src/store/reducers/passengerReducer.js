import { passengerAPI } from '../../api/api'
import {SET_SUCCESS_SUBMIT, SET_ERROR_SUBMIT} from '../../utils/action'

let initialState = {
    success: null,
    error: null
}

const passengerReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_SUCCESS_SUBMIT:
            return  {
            ...state, success: action.success
        }
        case SET_ERROR_SUBMIT: 
            return {
            ...state, error: action.error
        }
        default :{
            return state
        }
    }
}

const setSuccessSubmit = (success) => ({type: SET_SUCCESS_SUBMIT, success})
const setErrorSubmit = (error) => ({type: SET_ERROR_SUBMIT, error})

export const addPassenger = (passenger) => async (dispatch) => {
    return await passengerAPI.postPassenger(passenger)
        .then(response => {dispatch(setSuccessSubmit(response.statusText))})
        .catch(e => {dispatch(setErrorSubmit(e.message))})
}

export default passengerReducer;