import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/item',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getTools() {
    await delay(100);
    return (await instance.get()).data;
}

export async function getToolById(id) {
    await delay(100);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredTools(type, condition) {
    await delay(100);
    return (await instance.get(`/filters/${type}&${condition}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
} 