import React from 'react'
import { Box, TextField, Typography, InputAdornment } from '@mui/material'
import './style.css'

interface TextFieldComponentProps {
    label?: string,
    type?: 'text' | 'password',
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    icon?: React.ReactNode,
    labelIcon?: React.ReactNode,
    required?: boolean,
    multiline?: boolean,
    rows?: number
    classContainer?: string,
    name?: string
}

export const TextFieldComponent = ({ label, type, placeholder, value, className, onChange, icon, labelIcon, required, multiline = false, rows = 1, classContainer, name }: TextFieldComponentProps) => {
  return (
    <Box className={`flex flex-col gap-2 w-full ${classContainer}`}>
        <Typography className="text-field-label" variant="body2">{labelIcon && labelIcon} {label} {required && <span className="text-red-500">*</span>}</Typography>
        <TextField 
            variant="outlined" 
            fullWidth 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            type={type} 
            className={`text-field ${className}`} 
            slotProps={{ 
                input: { 
                    startAdornment: icon ? <InputAdornment position="start">{icon}</InputAdornment> : undefined, 
                    className: 'text-field',
                    name: name
                }
            }}
            multiline={multiline}
            rows={rows}
        />
    </Box>
  )
}

export default TextFieldComponent;