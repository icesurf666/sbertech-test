import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {Input, Button} from '@material-ui/core';

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
    const handleChange = event => {
        console.log(event.target.value)
    };
  return (
    <div className={classes.container}>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.name} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.surName} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.patronymic} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.dateOfBirth} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.personNumber} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.position} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
            <Input id="component-simple" margin="normal" value={selectedCode.subdivision} onChange={handleChange} />
      </FormControl>
      <Button onClick={() => handleRemove(selectedCode.personNumber)} color="secondary" className={classes.button}>
        Удалить
      </Button>
    </div>
  );
}