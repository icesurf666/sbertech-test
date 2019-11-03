import React from "react";
import DatePicker from "react-datepicker";

const DatePickerField = ({
    name,
    value,
    onChange
}) => {
    return ( <
        DatePicker selected = {
            value ? new Date(value) : undefined
        }
        onChange = {
            val => {
                onChange(name, val.toISOString());
            }
        }
        />
    );
};

export default DatePickerField;