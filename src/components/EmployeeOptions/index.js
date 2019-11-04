import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core';
import { Formik } from 'formik';
import { FormikTextField, FormikSelectField } from 'formik-material-fields';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {subdivisions, positions} from '../FormAdd'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));


export default function EmployeeOptions({selectedCode, handleRemove, handleEdit}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Formik
            initialValues={{
                name: selectedCode.name,
                surName: selectedCode.surName,
                patronymic: selectedCode.patronymic,
                dateOfBirth: selectedCode.dateOfBirth,
                personNumber: selectedCode.personNumber,
                position: selectedCode.position,
                subdivision: selectedCode.subdivision
            }}
        
            onSubmit = {(values, { setSubmitting }) => {
                handleEdit(values);
                setSubmitting(false);
              }
            }
        >
            {props => {
                const {
                    values,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    setFieldValue
                } = props;

                const handleDateChange = (value) => {
                    setFieldValue("dateOfBirth", value.toISOString());
                  };
                
                return (
                    <form onSubmit={handleSubmit} margin="normal" style={{marginTop: '20px'}}>
                        <Grid container direction="column">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    name="dateOfBirth"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={values.dateOfBirth}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                         </MuiPickersUtilsProvider>
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
                                Очистить
                            </Button>
                            <Button 
                                type="submit"
                                margin="normal"
                                disabled={isSubmitting}
                                >
                                Сохранить и закрыть
                            </Button>
                            <Button onClick={() => handleRemove(selectedCode.personNumber)} color="secondary" className={classes.button}>
                              Удалить
                            </Button>
                        </Grid>
                    </form>
                );
            }}
        </Formik>
    </div>
  );
}