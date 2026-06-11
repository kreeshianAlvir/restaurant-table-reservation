const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API = (req: any, method: string, endpoint: string) => {
    return fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        ...(req && {body: JSON.stringify(req)})
    })
}