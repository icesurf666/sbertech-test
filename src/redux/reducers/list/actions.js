import {SELECTED_EMPLOYEE_CODE} from './actionTypes'

export function getEmployeeRow(row) {
    return {
        type: SELECTED_EMPLOYEE_CODE,
        payload: row
    }
}

