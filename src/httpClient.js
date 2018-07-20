import axios from 'axios'
import xml2json from 'xml2json'

const httpClient = () => {
    const API_URL = 'http://api.wunderground.com/';
    const instance = axios.create({
        baseURL: API_URL,
        timeout: 1000,
        headers: { 'X-Custom-Header': 'cms' }
    });

    const convertResponseToJson = (response) => {
        response.data = xml2json.toJson(response.data)
        return response;
    }

    const returnJsonError = (error) => {
        return { error }
    }

    const defaultError = (error) => Promise.reject(error);

    instance.interceptors.response.use(convertResponseToJson, defaultError);

    return instance;
}

export default httpClient()