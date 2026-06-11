import React from 'react'
import './admin-styles.css'
import { Box, Typography, Button, Avatar } from '@mui/material'
import {CalendarMonth, DashboardOutlined, ChairOutlined, PeopleAltOutlined, Search, AccessTimeOutlined, TagOutlined} from '@mui/icons-material'
import { TextFieldComponent } from '../../components/textField'
import useAdminModel from './admin-models'
import type { Reservation, Table } from '../../assets/constants'
import moment from 'moment'

export const AdminPage = () => {
  const {reservations, cardValues, tables} = useAdminModel();
  return (
    <Box className="admin-container">
        <Box className="admin-header">
            <Box className="admin-header-left">
                <Typography variant="h6">Restaurant Name</Typography>
                <Typography variant="body2">Table Reservations * Thursday, Jun 5</Typography>
            </Box>
            <Box className="admin-header-right">
                <Box className="service-tag">
                    <CalendarMonth />
                    <Typography variant="body2">Evening Service</Typography>
                </Box>
                <Avatar className="admin-avatar">N</Avatar>
            </Box>
        </Box>
        <Box className="admin-content">
            <Box className="card-container">
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Total Tables</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">{cardValues.totalTables}</Typography>
                            <Typography variant="body2">{`${cardValues.totalSeats} total seats`}</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Occupied</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">{cardValues.occupiedTables}</Typography>
                            <Typography variant="body2">{`${cardValues.occupiedPercentage}% Occupancy`}</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Available</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">{cardValues.availableTables}</Typography>
                            <Typography variant="body2">Ready for seating</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Total Guests</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">{cardValues.totalGuests}</Typography>
                            <Typography variant="body2">Currently dining</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
            </Box>
            <Box className="floor-plan">
                <Box className="floor-plan-header">
                    <Box>
                        <Typography variant="h6">Floor Plan</Typography>
                        <Typography variant="body2">Live table overview</Typography>
                    </Box>
                    <Box className="floor-plan-legend">
                        <Box className="plan-legend occupied">
                            <Box className="plan-legend-circle"></Box>
                            <Typography variant="body2">Occupied</Typography>
                        </Box>
                        <Box className="plan-legend reserved">
                            <Box className="plan-legend-circle"></Box>
                            <Typography variant="body2">Reserved</Typography>
                        </Box>
                        <Box className="plan-legend available">
                            <Box className="plan-legend-circle"></Box>
                            <Typography variant="body2">Available</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="grid-plan">
                    {
                        tables.map((table: Table) => (
                            <Box key={table._id} className={`seat ${table.occupied ? 'occupied' : 'available'}`}>
                                <Box className="seat-tag">{`T${table.tableNumber}`}</Box>
                                <ChairOutlined />
                                <Typography variant="body2">{`${table.seats} seats`}</Typography>
                                <Box className="seat-people">
                                    {
                                        table.occupied && (<PeopleAltOutlined />)
                                    }
                                    <Typography variant="body2">{table.seated ? table.seated : 'Available'}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box className="table-container">
                <Box className="table-header">
                    <Box>
                        <Typography variant="h6">Reservations</Typography>
                        <Typography variant="body2">{`${reservations.length} total . Today`}</Typography>
                    </Box>
                    <TextFieldComponent icon={<Search />} placeholder="Search guests" classContainer="table-filter" />
                </Box>
                <Box className="table">
                    <Box className="table-content-header">
                        <Box className="table-row">
                            <Box className="table-cell">
                                <Typography variant="body2">Guest</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Time</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Party</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Table</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Status</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Notes</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="table-content-body">
                        {
                            reservations.map((reservations: Reservation) => (
                                <Box className="table-row">
                                    <Box className="table-cell">
                                        <Typography variant="body1" className="table-cell-name">{reservations.fullName}</Typography>
                                        <Typography variant="subtitle2" className="table-cell-contact">{reservations.contact}</Typography>
                                    </Box>
                                    <Box className="table-cell">
                                        <AccessTimeOutlined />
                                        <Typography variant="body2" className="table-cell-time">{moment(reservations.dateTime).format('MMM DD, YYYY h:mm A')}</Typography>
                                    </Box>
                                    <Box className="table-cell">
                                        <PeopleAltOutlined />
                                        <Typography variant="body2">{reservations.size}</Typography>
                                    </Box>
                                    <Box className="table-cell">
                                        <TagOutlined />
                                        <Typography variant="body2">{reservations.table}</Typography>
                                    </Box>
                                    <Box className="table-cell">
                                        <Box className={`table-row-status ${reservations.status}`}>
                                            <Typography variant="body2" className="font-capitalize">{reservations.status}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="table-cell">
                                        <Typography variant="body2" className="table-cell-notes">{reservations.notes}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}