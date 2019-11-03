import {SELECTED_EMPLOYEE_CODE, ADD_EMPLOYEE} from './actionTypes'

export function getEmployeeCode(row) {
    return {
        type: SELECTED_EMPLOYEE_CODE,
        payload: row
    }
}

export function addEmployee(data) {
    return {
        type: ADD_EMPLOYEE,
        payload: data
    }
}


