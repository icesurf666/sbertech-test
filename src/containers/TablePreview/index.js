import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, FormControl, Input} from '@material-ui/core';
import {connect} from 'react-redux';
import {format, parseISO} from 'date-fns';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    formControl: {
      margin: theme.spacing(1),
    },
  }));

const mapStateToProps = ({list}) => {
    return {
        listOfEmployees: list.listOfEmployees,
        selectedEmployeeCode: list.selectedEmployeeCode
    }
};

export default connect(mapStateToProps, null)(function TablePreview ({selectedEmployeeCode}) {
        console.log(selectedEmployeeCode);
        const classes = useStyles();
        return (
            <Paper className={classes.root}>
                { selectedEmployeeCode ?
                <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.name} readOnly={true} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.surName} readOnly={true}  />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.patronymic} readOnly={true}  />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={format(parseISO(selectedEmployeeCode.dateOfBirth), 'yyyy-MM-dd')} readOnly={true} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.personNumber} readOnly={true} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.position} readOnly={true} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input id="component-simple" margin="normal" value={selectedEmployeeCode.subdivision} readOnly={true} />
                    </FormControl>
                </div>
                : null }
            </Paper>
        );
    }
)
