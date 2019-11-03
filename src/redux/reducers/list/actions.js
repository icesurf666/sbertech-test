import {SELECTED_EMPLOYEE_CODE, ADD_EMPLOYEE, REMOVE_EMPLOYEE, EDIT_EMPLOYEE} from './actionTypes'

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

export function removeEmployee(id){
    return {
        type: REMOVE_EMPLOYEE,
        payload: id
    }
}
export function editEmployee(newData){
    return {
        type: EDIT_EMPLOYEE,
        payload: newData
    }
}


