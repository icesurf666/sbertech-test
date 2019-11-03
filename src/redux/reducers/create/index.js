import {ADD_EMPLOYEE} from './actionTypes';
import listOfEmployees from '../../../utils';
export const initialState = {
    listOfEmployees
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                listOfEmployees: [...state.listOfEmployees, action.payload]
            };
        default:
            return state 
        }
    }