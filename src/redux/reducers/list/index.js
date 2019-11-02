import {
    LIST_EMPLOYEE,
    SELECTED_EMPLOYEE_CODE
} from "./actionTypes";
export const initialState = {
    listOfEmployees: [
        {
            personNumber: 1,
            surName: 'Казанцев',
            name: 'Павел',
            patronymic: 'Андреевич',
            dateOfBirth: '29/05/1998',
            position: 'junior developer',
            subdivision: 'Сбербанк'
        },
        {
            personNumber: 2,
            surName: 'Иванов',
            name: 'Иван',
            patronymic: 'Отчество',
            dateOfBirth: '23/05/1996',
            position: 'junior developer',
            subdivision: 'Сбербанк'
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
        case LIST_EMPLOYEE:
            return {
                ...state
            };
        default:
            return state
    }
}

