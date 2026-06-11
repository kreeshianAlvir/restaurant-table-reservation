import { type AlertColor } from "@mui/material";

export interface RESERVE_DATA {
    branch: string;
    dateTime: string;
    size: number;
    fullName: string;
    contact: string;
    notes: string;
}

export const BRANCHES = [
    "Manila",
    "Quezon City",
    "Makati",
    "Pasig",
    "Mandaluyong",
    "Marikina",
    "Valenzuela",
    "Las Piñas",
    "Parañaque",
    "Taguig",
]

export const TIMES = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
]

export type AlertState = {
    open: boolean;
    message: string;
    severity: AlertColor;
}

export type Reservation = {
    _id: string;
    branch: string;
    dateTime: string;
    size: number;
    fullName: string;
    contact: string;
    notes: string;
    status: string;
    table: number;
}

export type CardValues = {
    totalTables: number;
    totalSeats: number;
    availableTables: number;
    occupiedTables: number;
    occupiedPercentage: number;
    totalGuests: number;
}

export type Table = {
    _id: string;
    tableNumber: number;
    seats: number;
    occupied: boolean;
    seated: number;
}