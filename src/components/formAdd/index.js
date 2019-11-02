import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import DatePicker from '../UI/datePicker';
import "react-datepicker/dist/react-datepicker.css";
import {withRouter} from 'react-router-dom';

const positions = [
    {
        id: 'dz',
        value: '',
        label: 'Должность'
    },
    {   
        id: 'fd',
        value: 'frontend',
        label: 'frontend dev'
    },
    {
        id: 'bd',
        value: 'backend',
        label: 'backend dev'
    },
    {
        id: 'cs',
        value: 'Консультант',
        label: 'Консультант'
    }
]
const subdivisions = [
    {
        id: 'pd',
        value: 'Подразделение',
        label: 'Подразделение'
    },
    {
        id: 'sb',
        value: 'Сбербанк',
        label: 'Сбербанк'
    },
    {
        id: 'sbt',
        value: 'Сбербанк технологии',
        label: 'Сбербанк технологии'
    }
]

const FormAdd = (props) => (
    <div>
        <Formik
            initialValues={{
                name: '',
                surName: '',
                patronymic: '',
                date: "",
                personNumber: '',
                position: '',
                subdivision: ''


            }}
            // onSubmit={(values, { setSubmitting }) => {
            //     setTimeout(() => {
            //         alert(JSON.stringify(values, null, 2));
            //         setSubmitting(false);
            //     }, 500);
            // }}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    setFieldValue
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <DatePicker
                            name="date"
                            value={values.date}
                            onChange={setFieldValue}
                        />
                        <Field type="text" placeholder="Фамилия" name="surName" />
                        <Field type="text" placeholder="Имя" name="name" />
                        <ErrorMessage name="name" component="div" />
                        <Field type="text" placeholder="Отчество" name="patronymic" />
                        <Field type="number" placeholder="Табельный номер" name="personNumber" />
                        <select
                            name="position"
                            value={values.position}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {positions.map(({id, value, label}) => (
                                <option key={id} value={value} label={label}></option>
                            ))}
                         </select>
                         <select
                            name="subdivision"
                            value={values.subdivision}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {subdivisions.map(({id, value, label}) => (
                                <option key={id} value={value} label={label}></option>
                            ))}
                         </select>
                        <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default withRouter(FormAdd);
