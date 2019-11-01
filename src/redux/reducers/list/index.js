import {
    DATA_EMPLOYEE,
    LIST_EMPLOYEE,
    SELECTED_EMPLOYEE_CODE
} from "./actionTypes";
import employees from '../../../utils';
export const initialState = {
    listOfEmployees: [
        {
            personNumber: 1,
            surName: 'Казанцев',
            name: 'Павел'
        },
        {
            personNumber: 2,
            surName: 'Kazantsev',
            name: 'Pavel'
        }
    ],
    dataEmployee: [],
    selectedEmployeeCode: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_EMPLOYEE_CODE:
            return {
                ...state,
                selectedEmployeeCode: action.payload
            };
        case DATA_EMPLOYEE:
            return {
                ...state,
                dataEmployee: employees[action.payload]
            };
        case LIST_EMPLOYEE:
            return {
                ...state
            };
        default:
            return state
    }
}

