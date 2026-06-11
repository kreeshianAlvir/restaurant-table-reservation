import React from 'react'
import {Box, Typography, Divider, Button} from '@mui/material'
import {LocationOnOutlined, RestaurantMenu, Event, PeopleOutlineOutlined, LocalPhoneOutlined, PersonOutlineOutlined} from '@mui/icons-material'
import './client-styles.css'
import { SelectComponent } from '../../components/select'
import { TextFieldComponent } from '../../components/textField'
import useClientModel from './client-model'
import DatePickerComponent from '../../components/datePicker'
import {useRootModel} from '../../root-models'

export const ClientPage = () => {
    const { setAlert } = useRootModel();
    const {branch, times, reserveData, time, handleSizeChange, handleSetReserveData, handleSetDateTime, handleContinueReservation} = useClientModel(setAlert);
    
    return (
        <Box className="client-container">
            <Box className="client-hero">
                <Box className="client-hero-tag">
                    <RestaurantMenu />
                    <Typography variant="body1">Restaurant Name</Typography>
                </Box>
                <Typography variant="h6" className="title">Welcome to the restaurant reservation system. Please select a date and time to reserve a table.</Typography>
                <Typography variant="body2" className="description">Select a date and time to reserve a table.</Typography>
            </Box>
            <Box className="client-form-container">
                <Box className="client-form">
                    <Box className="flex flex-col gap-2 align-center w-full">
                        <Typography variant="h6">Reserve a Table</Typography>
                        <Typography variant="body2">Select a date and time to reserve a table.</Typography>
                    </Box>
                    <Divider />
                    <SelectComponent 
                        label="Branch" 
                        name="branch"
                        options={branch} 
                        required={true} 
                        icon={<LocationOnOutlined />}
                        onChange={(e: any) => handleSetReserveData(e)}
                        value={reserveData.branch}
                    />
                    <Box className="flex gap-2 align-center w-full">
                        <DatePickerComponent label="Date" required={true} icon={<Event />} onChange={handleSetDateTime} value={reserveData.dateTime.split(' ')[0]}/>
                        <SelectComponent 
                            label="Time" 
                            options={times} 
                            required={true} 
                            icon={<LocationOnOutlined />}
                            name="time"
                            onChange={(e: any) => handleSetReserveData(e)}
                            value={time}
                        />
                    </Box>
                    <Box className="flex flex-col gap-2 align-center w-full">
                        <Box className="flex items-center gap-2 w-full">
                            <PeopleOutlineOutlined className="text-[var(--muted-fg)] !w-[0.9rem] !h-[0.9rem]"/>
                            <Typography variant="body2">Party Size <span className="text-red-500">*</span></Typography>
                        </Box>
                        <Box className="guest-size-container">
                        {
                            Array.from({length: 10}).map((_, index) => (
                                <Button className={`${reserveData?.size === index + 1 ? 'active' : ''}`} key={index} disableElevation={true} variant="contained" color="primary" onClick={() => handleSizeChange(index + 1)}>
                                    {index + 1}
                                </Button>
                            ))
                        }
                        </Box>
                    </Box>
                    <Divider />
                    <Box className="flex gap-2 w-full">
                        <TextFieldComponent 
                            label="Full Name" required={true} 
                            labelIcon={<PersonOutlineOutlined />} 
                            name="fullName" 
                            onChange={(e: any) => handleSetReserveData(e)}
                            value={reserveData.fullName}
                        />
                        <TextFieldComponent 
                            label="Phone Number" 
                            required={true} 
                            labelIcon={<LocalPhoneOutlined />} 
                            name="contact" 
                            onChange={(e: any) => handleSetReserveData(e)}
                            value={reserveData.contact}
                        />
                    </Box>
                    <TextFieldComponent 
                        label="Special Requests" 
                        labelIcon={<LocalPhoneOutlined />} 
                        multiline={true} 
                        rows={4} 
                        placeholder='Allergies, celebrations, seating preferences...' 
                        name="notes" 
                        onChange={(e: any) => handleSetReserveData(e)}
                        value={reserveData.notes}
                    />
                    <Button disableElevation={true} variant="contained" color="primary" fullWidth className="reserve-button" onClick={handleContinueReservation}>Confirm Reservation</Button>
                </Box>
            </Box>
            <Divider />
            <Box className="w-full py-[1.5rem]">
                <Typography variant="subtitle2" className="text-center">© 2026 Restaurant Name</Typography>
            </Box>
        </Box>
    )
}