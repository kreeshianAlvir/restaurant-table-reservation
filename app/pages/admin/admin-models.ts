import React, {useState, useEffect} from 'react';
import type { Reservation, CardValues, Table } from '../../assets/constants';
import { GET_RESERVATIONS, GET_TABLES } from '../../data/dataSource';
import { useRootModel } from '../../root-models';

const useAdminModel = () => {
    const {setAlert} = useRootModel();
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [tables, setTables] = useState<Table[]>([]);
    const [cardValues, setCardValues] = useState<CardValues>({
        totalTables: 0,
        totalSeats: 0,
        availableTables: 0,
        occupiedTables: 0,
        occupiedPercentage: 0,
        totalGuests: 0,
    })

    useEffect(() => {
        getReservations();
    },[]);

    const getReservations = async () => {
        const [reservationsRes, tableRes] = await Promise.all([GET_RESERVATIONS(), GET_TABLES()]);
        if(reservationsRes.status !== 200) {
            setAlert({
                open: true,
                severity: 'error',
                message: reservationsRes.statusText || 'Failed to get reservations'
            })
            return
        }

        if(tableRes.status !== 200) {
            setAlert({
                open: true,
                severity: 'error',
                message: tableRes.statusText || 'Failed to get table data'
            })
            return
        }

        const tables = tableRes.data;
        const totalTables = tables.length;
        const totalSeats = tables.reduce((acc: number, curr: any) => acc + curr.seats, 0);
        const availableTables = tables.filter((table: any) => !table.status).length;
        const occupiedTables = tables.filter((table: any) => table.status).length;
        const occupiedPercentage = (occupiedTables / totalTables) * 100;
        const totalGuests = reservationsRes.data.filter((reservation: any) => reservation.status === 'seated').reduce((acc: number, curr: any) => acc + curr.size, 0);

        setTables(tables);
        setReservations(reservationsRes.data);
        setCardValues({
            totalTables,
            totalSeats,
            availableTables,
            occupiedTables,
            occupiedPercentage,
            totalGuests
        })
    }

    return {
        reservations,
        cardValues,
        tables,
        setReservations
    }
}

export default useAdminModel;