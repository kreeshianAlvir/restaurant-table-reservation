import type { RESERVE_DATA } from '../assets/constants';
import { API } from './api';

// GET
export const GET_RESERVATIONS = async () => {
    try {
        const response = await API(null, 'GET', 'reservations').then(res => res.json());
        return {status: 200, statusText: 'Success', data: response};
    } catch (error: any) {
        return {status: error.status, statusText: error.statusText};
    }
}

// GET
export const GET_TABLES = async () => {
    try {
        const response = await API(null, 'GET', 'tables').then(res => res.json());
        return {status: 200, statusText: 'Success', data: response};
    } catch (error: any) {
        return {status: error.status, statusText: error.statusText};
    }
}

// POST
export const POST_RESERVATION = async (data: RESERVE_DATA) => {
    try {
        const response = await API(data, 'POST', 'reservations');
        return {status: response.status, statusText: response.statusText};
    } catch (error: any) {
        return {status: error.status, statusText: error.statusText};
    }
}