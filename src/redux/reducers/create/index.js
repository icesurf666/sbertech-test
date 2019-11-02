import {ADD_EMPLOYEE} from './actionTypes';
import listOfEmployees from '../../../utils';
export const initialState = {
    listOfEmployees,
    arr: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                arr: state.arr.concat(action.payload)
            };
        default:
            return state 
        }
    }