import React from 'react'
import './admin-styles.css'
import { Box, Typography, Button, Avatar } from '@mui/material'
import {CalendarMonth, DashboardOutlined, ChairOutlined, PeopleAltOutlined, Search, AccessTimeOutlined, TagOutlined} from '@mui/icons-material'
import { TextFieldComponent } from '../../components/textField'

export const AdminPage = () => {
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
                            <Typography variant="h3">12</Typography>
                            <Typography variant="body2">52 total seats</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Total Tables</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">12</Typography>
                            <Typography variant="body2">52 total seats</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Total Tables</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">12</Typography>
                            <Typography variant="body2">52 total seats</Typography>
                        </Box>
                    </Box>
                    <Box className="card-right">
                        <DashboardOutlined className="card-icon"/>
                    </Box>
                </Box>
                <Box className="card">
                    <Box className="card-left">
                        <Typography variant="h6" className="card-left-title">Total Tables</Typography>
                        <Box className="card-left-details">
                            <Typography variant="h3">12</Typography>
                            <Typography variant="body2">52 total seats</Typography>
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
                    <Box className="seat available">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                    <Box className="seat occupied">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                    <Box className="seat reserved">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                    <Box className="seat">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                    <Box className="seat">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                    <Box className="seat">
                        <Box className="seat-tag">T1</Box>
                        <ChairOutlined />
                        <Typography variant="body2">1 seats</Typography>
                        <Box className="seat-people">
                            <PeopleAltOutlined />
                            <Typography variant="body2">1</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="table-container">
                <Box className="table-header">
                    <Box>
                        <Typography variant="h6">Reservations</Typography>
                        <Typography variant="body2">10 total . Today</Typography>
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
                        <Box className="table-row">
                            <Box className="table-cell">
                                <Typography variant="body1" className="table-cell-name">Guest</Typography>
                                <Typography variant="subtitle2" className="table-cell-contact">Guest</Typography>
                            </Box>
                            <Box className="table-cell">
                                <AccessTimeOutlined />
                                <Typography variant="body2">Time</Typography>
                            </Box>
                            <Box className="table-cell">
                                <PeopleAltOutlined />
                                <Typography variant="body2">Party</Typography>
                            </Box>
                            <Box className="table-cell">
                                <TagOutlined />
                                <Typography variant="body2">Table</Typography>
                            </Box>
                            <Box className="table-cell">
                                <Box className="table-row-status seated">
                                    <Typography variant="body2">Seated</Typography>
                                </Box>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Notes</Typography>
                            </Box>
                        </Box>
                        <Box className="table-row">
                            <Box className="table-cell">
                                <Typography variant="body1" className="table-cell-name">Guest</Typography>
                                <Typography variant="subtitle2" className="table-cell-contact">Guest</Typography>
                            </Box>
                            <Box className="table-cell">
                                <AccessTimeOutlined />
                                <Typography variant="body2">Time</Typography>
                            </Box>
                            <Box className="table-cell">
                                <PeopleAltOutlined />
                                <Typography variant="body2">Party</Typography>
                            </Box>
                            <Box className="table-cell">
                                <TagOutlined />
                                <Typography variant="body2">Table</Typography>
                            </Box>
                            <Box className="table-cell">
                            <Box className="table-row-status confirmed">
                                    <Typography variant="body2">Confirmed</Typography>
                                </Box>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Notes</Typography>
                            </Box>
                        </Box>
                        <Box className="table-row">
                            <Box className="table-cell">
                                <Typography variant="body1" className="table-cell-name">Guest</Typography>
                                <Typography variant="subtitle2" className="table-cell-contact">Guest</Typography>
                            </Box>
                            <Box className="table-cell">
                                <AccessTimeOutlined />
                                <Typography variant="body2">Time</Typography>
                            </Box>
                            <Box className="table-cell">
                                <PeopleAltOutlined />
                                <Typography variant="body2">Party</Typography>
                            </Box>
                            <Box className="table-cell">
                                <TagOutlined />
                                <Typography variant="body2">Table</Typography>
                            </Box>
                            <Box className="table-cell">
                            <Box className="table-row-status pending">
                                    <Typography variant="body2">Pending</Typography>
                                </Box>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Notes</Typography>
                            </Box>
                        </Box>
                        <Box className="table-row">
                            <Box className="table-cell">
                                <Typography variant="body1" className="table-cell-name">Guest</Typography>
                                <Typography variant="subtitle2" className="table-cell-contact">Guest</Typography>
                            </Box>
                            <Box className="table-cell">
                                <AccessTimeOutlined />
                                <Typography variant="body2">Time</Typography>
                            </Box>
                            <Box className="table-cell">
                                <PeopleAltOutlined />
                                <Typography variant="body2">Party</Typography>
                            </Box>
                            <Box className="table-cell">
                                <TagOutlined />
                                <Typography variant="body2">Table</Typography>
                            </Box>
                            <Box className="table-cell">
                            <Box className="table-row-status cancelled">
                                    <Typography variant="body2">Cancelled</Typography>
                                </Box>
                            </Box>
                            <Box className="table-cell">
                                <Typography variant="body2">Notes</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}