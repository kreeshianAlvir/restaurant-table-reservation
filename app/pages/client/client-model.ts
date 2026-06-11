import React, { useState } from 'react'
import { type RESERVE_DATA, BRANCHES, TIMES } from '../../assets/constants'
import type { PickerValue } from '@mui/x-date-pickers/internals';
import { POST_RESERVATION } from '../../data/dataSource';
import type { AlertState } from '../../assets/constants';
import moment from 'moment'

const DEFAULT_RESERVE_DATA: RESERVE_DATA = {
    branch: '',
    dateTime: '',
    size: 0,
    fullName: '',
    contact: '',
    notes: ''
}

const useClientModel = (setAlert: (alert: AlertState) => void) => {
    const [reserveData, setReserveData] = useState<RESERVE_DATA>(DEFAULT_RESERVE_DATA);
    const [time, setTime] = useState<string>('');

    const handleSizeChange = (size: number) => {
        setReserveData({...reserveData, size: size});
    }

    const handleSetReserveData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if(name === 'time') {
            const twentyFourHourTime = moment(value, 'h:mm A').format('HH:mm');
            const dateTime = `${reserveData.dateTime}T${twentyFourHourTime}`;
            setTime(value);
            setReserveData({...reserveData, dateTime});
            return
        }
        setReserveData({...reserveData, [name]: value});
    }

    const handleSetDateTime = (value: PickerValue) => {
        if(!value) return;
        setReserveData({...reserveData, dateTime: value.format('YYYY-MM-DD')});
    }

    const handleContinueReservation = async () => {
        const errors = Object.entries(reserveData).filter(([key, value]) => !value).map(([key]) => {return key !== 'notes' ? key : null}).filter((item): item is string => item !== null);
        if(errors.length > 0) {
            setAlert({
                open: true,
                severity: 'error',
                message: `Please fill in all required fields: ${errors.join(', ')}`
            })
            return
        }

        const res = await POST_RESERVATION(reserveData);
        if(res.status !== 200) {
            setAlert({
                open: true,
                severity: 'error',
                message: res.statusText || 'Failed to create reservation'
            })
            return
        }

        setTime('');
        setReserveData(DEFAULT_RESERVE_DATA);
        setAlert({
            open: true,
            severity: 'success',
            message: 'Reservation created successfully'
        })
    }

    return {
        branch: BRANCHES,
        times: TIMES,
        reserveData,
        time,
        handleSizeChange,
        handleSetReserveData,
        handleSetDateTime,
        handleContinueReservation
    }
}

export default useClientModel;