import httpClient from './httpClient'
import isNode from 'detect-node'


/**
 * Default entry point
 */
const pitaCore = (function pita() {
    return {
        version: '1.0.0',
        first: () => {
            // cross origin not available 😒
            let endpoint = 'weatherstation/WXCurrentObXML.asp';
            return httpClient.get(endpoint, {
                id: 'ISIASSOR2'
            })
        }
    }
})()

if (isNode) {
    module.exports = pitaCore;
    console.log(`✔\tPita version ${pitaCore.version} initialized!`)
}

else {
    window.pita = pitaCore;
    console.log(`✔\tPita version ${pitaCore.version} initialized!`)
}

