import { Record, List } from 'immutable';

export const EmployeeRecord = Record({
    surName: '',
    name: '',
    patronymic: '',
    dateOfBirth: '',
    personNumber: '',
    position: '',
    subdivision: ''
});

export const StateRecord = Record({
    employees: List([new EmployeeRecord()])
});

