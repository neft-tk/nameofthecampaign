import Static from './staticHelper';

const URL_PREFIX = Static.serverUrl;

const API = {
    getUsers: async () => {
        const res = await fetch(`${URL_PREFIX}/api/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
            },
        });
        return await res.json();
    },
    getUsersFromToken: async (token) => {
        const res = await fetch(`${URL_PREFIX}/api/users/readtoken`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return await res.json()
    }
}

export default API;