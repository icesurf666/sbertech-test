import {DATA_EMPLOYEE, SELECTED_EMPLOYEE_CODE} from './actionTypes'

export function getEmployeeCode(code) {
    return {
        type: SELECTED_EMPLOYEE_CODE,
        payload: code
    }
}
export function getDataEmployee(code) {
    return {
        type: DATA_EMPLOYEE,
        payload: code
    }
}

