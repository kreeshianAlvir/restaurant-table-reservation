import React, {useEffect} from 'react'
import {Box, Typography, Divider, Button} from '@mui/material'
import {LocationOnOutlined, RestaurantMenu, Event, PeopleOutlineOutlined, LocalPhoneOutlined, PersonOutlineOutlined} from '@mui/icons-material'
import './client-styles.css'
import { SelectComponent } from '../../components/select'
import { TextFieldComponent } from '../../components/textField'

export const ClientPage = () => {
    useEffect(() => {
        console.log("Fetching data...");
        fetch("http://localhost:5050/reservations",{
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
            // body: JSON.stringify({
            //     branch: "Branch 1",
            //     fullName: "John Doe",
            //     contact: "1234567890",
            //     dateTime: "2026-01-01T14:00",
            //     size: 2,
            //     notes: "No allergies, celebrations, seating preferences...",
            // }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[])
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
                    options={['2026-01-01', '2026-01-02', '2026-01-03']} 
                    required={true} 
                    icon={<LocationOnOutlined />}
                />
                <Box className="flex gap-2 align-center w-full">
                    <TextFieldComponent label="Date" required={true} labelIcon={<Event />}/>
                    <SelectComponent 
                        label="Time" 
                        options={['2026-01-01', '2026-01-02', '2026-01-03']} 
                        required={true} 
                        icon={<LocationOnOutlined />}
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
                            <Button key={index} disableElevation={true} variant="contained" color="primary">
                                {index + 1}
                            </Button>
                        ))
                    }
                    </Box>
                </Box>
                <Divider />
                <Box className="flex gap-2 w-full">
                    <TextFieldComponent label="Full Name" required={true} labelIcon={<PersonOutlineOutlined />}/>
                    <TextFieldComponent label="Phone Number" required={true} labelIcon={<LocalPhoneOutlined />}/>
                </Box>
                <TextFieldComponent label="Special Requests" required={true} labelIcon={<LocalPhoneOutlined />} multiline={true} rows={4} placeholder='Allergies, celebrations, seating preferences...'/>
                <Button disableElevation={true} variant="contained" color="primary" fullWidth className="reserve-button">Confirm Reservation</Button>
            </Box>
        </Box>
        <Divider />
        <Box className="w-full py-[1.5rem]">
            <Typography variant="subtitle2" className="text-center">© 2026 Restaurant Name</Typography>
        </Box>
    </Box>
  )
}