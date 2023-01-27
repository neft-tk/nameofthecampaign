import Static from './staticHelper';

const URL_PREFIX = Static.serverUrl;

const API = {
    login: async (userObj) => {
        const res = await fetch(`${URL_PREFIX}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(res.status === 401) {
            console.log('DENIED LOGIN');
            return await res.json({ msg: 'invalid login credentials'})
        }
        return await res.json()
    },
    getUsers: async () => {
        const res = await fetch(`${URL_PREFIX}/api/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
            },
        });
        return await res.json();
    },
    getUserFromToken: async (token) => {
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