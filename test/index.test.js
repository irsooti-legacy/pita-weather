import assert, { fail } from 'assert'
import { SUCCESS_CASE as endpointSucces, FAIL_CASE as endpointFail } from './endpoint.test'

describe('Testing endpoints', function () {
    describe('/GET to weatherstation/WXCurrentObXML.asp:', function () {
        it('should return a json with the response', function (done) {
            endpointSucces().then(result => {
                console.log('result', JSON.stringify(result.data, null, 4));
                done();
            })
        });
        it('should return a 404', function (done) {
            endpointFail().then(resp => {
                fail();
            }).catch((err) => {
                assert.equal(err.response.status, 404)
                done();
            });
        })
    });
});