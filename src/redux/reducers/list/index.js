import {
    LIST_EMPLOYEE,
    SELECTED_EMPLOYEE_CODE,
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE,
    EDIT_EMPLOYEE
} from "./actionTypes";
import listOfEmployees from '../../../utils';
export const initialState = {
    listOfEmployees,
    selectedEmployeeCode: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_EMPLOYEE_CODE:
            return {
                ...state,
                selectedEmployeeCode: action.payload
            };
        case LIST_EMPLOYEE:
            return {
                ...state
            };
        case ADD_EMPLOYEE:
            return {
                listOfEmployees: [...state.listOfEmployees, action.payload]
            };
        case REMOVE_EMPLOYEE: 
            return {
                listOfEmployees: [...state.listOfEmployees].filter(newList => newList.personNumber !== action.payload)
            }
        case EDIT_EMPLOYEE: 
            return {
                listOfEmployees: [...state.listOfEmployees].map((newList) => newList.personNumber === action.payload.personNumber ? {...newList, ...action.payload} : newList) 
            }
        default:
            return state
    }
}

