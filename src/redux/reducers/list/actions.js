import {SELECTED_EMPLOYEE_CODE} from './actionTypes'

export function getEmployeeCode(row) {
    return {
        type: SELECTED_EMPLOYEE_CODE,
        payload: row
    }
}

