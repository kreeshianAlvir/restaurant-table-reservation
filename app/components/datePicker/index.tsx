import React,{useState} from 'react'
import {Box, Typography, ClickAwayListener} from '@mui/material'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './style.css'
import type { PickerValue } from '@mui/x-date-pickers/internals';
import type { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers/models';
import dayjs from 'dayjs';

interface DatePickerComponentProps {
    label?: string,
    required?: boolean,
    icon?: React.ReactNode,
    classContainer?: string,
    onChange?: (value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void,
    value?: string
}

const DatePickerComponent = ({label, required, icon, classContainer, onChange, value}: DatePickerComponentProps) => {
    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box className={`flex flex-col gap-2 w-full date-picker-container ${classContainer}`}>
                <Typography className="date-picker-label" variant="body2">{icon && icon} {label} {required && <span className="text-red-500">*</span>}</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        slotProps={{
                            textField: {
                                className: 'date-picker',
                                onClick: () => setOpen(true),
                            }
                        }}
                        slots={{
                            openPickerButton: () => null
                        }}
                        open={open}
                        onClose={() => setOpen(false)}
                        closeOnSelect={true}
                        onChange={onChange}
                        value={value ? dayjs(value) : null}
                    />
                </LocalizationProvider>
            </Box>
        </ClickAwayListener>
    )
}

export default DatePickerComponent;