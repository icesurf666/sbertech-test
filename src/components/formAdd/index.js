import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import DatePicker from '../UI/datePicker';
import "react-datepicker/dist/react-datepicker.css";
import {withRouter} from 'react-router-dom';

const FormAdd = () => (
    <div>
        <Formik
            initialValues={{
                name: '',
                surName: '',
                patronymic: '',
                date: "",
                personNumber: ''

            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
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
