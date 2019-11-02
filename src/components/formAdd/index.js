import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import DatePicker from '../UI/datePicker';
import "react-datepicker/dist/react-datepicker.css";
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormikTextField, FormikSelectField } from 'formik-material-fields';

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

const FormAdd = () => (
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
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        
            // onSubmit = {(values, { setSubmitting }) => {
            //     props.handleSub(values);
            //     setSubmitting(false);
            //   }
            // }
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
                    <form onSubmit={handleSubmit} margin="normal">
                        <Grid container direction="column">
                            <DatePicker
                                name="date"
                                value={values.date}
                                onChange={setFieldValue}
                            />
                            <FormikTextField type="text" placeholder="Фамилия" name="surName" margin="normal" />
                            <FormikTextField type="text" placeholder="Имя" name="name" margin="normal" />
                            <FormikTextField type="text" placeholder="Отчество" name="patronymic" margin="normal"/>
                            <FormikTextField type="number" placeholder="Табельный номер" name="personNumber" margin="normal" />
                            <FormikSelectField
                                name="position"
                                margin="normal"
                                value={values.position}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label={positions[0].label}
                                options={positions}
                            >
                            
                            </FormikSelectField>
                            <FormikSelectField
                                name="subdivision"
                                margin="normal"
                                value={values.subdivision}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label={subdivisions[0].label}
                                options={subdivisions}
                            >
                                
                            </FormikSelectField>
                            <Button
                                type="button"
                                margin="normal"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </Button>
                            <Button 
                                type="submit"
                                margin="normal"
                                disabled={isSubmitting}
                                >
                                Submit
                            </Button>
                        </Grid>
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default(FormAdd);
