import httpClient from './httpClient'

/**
 * Default entry point
 */
export default pita = {
    version: '1.0.0',
    first: () => {
        let endpoint = 'weatherstation/WXCurrentObXML.asp';
        // ID=ISIASSOR2


        return httpClient.get(endpoint, {
            id: 'ISIASSOR2'
        })
    }
} 