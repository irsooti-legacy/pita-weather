import httpClient from '../src/httpClient';

export const SUCCESS_CASE = () => {

    let endpoint = 'weatherstation/WXCurrentObXML.asp';
    // ID=ISIASSOR2


    return httpClient.get(endpoint, {
        id: 'ISIASSOR2'
    })
}


export const FAIL_CASE = () => {

    let endpoint = 'weatherstation/WXCurrenxxxxxxtObXML.asp';
    // ID=ISIASSOR2


    return httpClient.get(endpoint, {
        fail: 'fail'
    })
}

