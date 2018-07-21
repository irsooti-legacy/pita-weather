import axios from 'axios'

const httpClient = () => {
    const API_URL = 'http://api.wunderground.com/';
    const instance = axios.create({
        baseURL: API_URL,
        timeout: 3000,
        headers: { 'X-Custom-Header': 'cms' }
    });

    const convertResponseToJson = (response) => {
        return response;
    }

    const returnJsonError = (error) => {
        return { error }
    }

    const defaultError = (error) => Promise.reject(error);

    instance.interceptors.response.use(convertResponseToJson, defaultError);

    return instance;
}

export default httpClient();