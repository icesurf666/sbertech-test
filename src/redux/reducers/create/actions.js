import {ADD_EMPLOYEE} from './actionTypes'

export function addEmployee(data) {
    return {
        type: ADD_EMPLOYEE,
        payload: data
    }
}

