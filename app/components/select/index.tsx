import React from 'react'
import { Box, Select, MenuItem, Typography } from '@mui/material'
import './style.css'
import {KeyboardArrowDown} from '@mui/icons-material'

interface SelectComponentProps {
    label?: string,
    options: string[],
    value?: string,
    onChange?: React.ComponentProps<typeof Select>['onChange'],
    icon?: React.ReactNode,
    required?: boolean
}

export const SelectComponent = ({ label, options, value, onChange, icon, required }: SelectComponentProps) => {
    return (
        <Box className="flex flex-col gap-2 w-full">
            <Typography className="select-label" variant="body2">{icon && icon} {label || 'Label'} {required && <span className="text-red-500">*</span>}</Typography>
            <Select
                value={value}
                onChange={onChange}
                fullWidth
                slotProps={{
                    input: {
                        className: 'select'
                    }
                }}
                IconComponent={KeyboardArrowDown}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </Box>
    )
}