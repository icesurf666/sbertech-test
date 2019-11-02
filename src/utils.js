import { Record, List } from 'immutable';

export const EmployeeRecord = Record({
    personNumber: 2,
    surName: 'Иванов',
    name: 'Иван',
    patronymic: 'Отчество',
    dateOfBirth: '23/05/1996',
    position: 'junior developer',
    subdivision: 'Сбербанк'

    // surName: '',
    // name: '',
    // patronymic: '',
    // dateOfBirth: '',
    // personNumber: '',
    // position: '',
    // subdivision: ''
});

export const StateRecord = Record({
    employees: List([new EmployeeRecord()]),
    dataEmployee: [],
    selectedEmployeeCode: null
});

