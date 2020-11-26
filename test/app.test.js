const request = require('supertest');
const app = require('../app');


describe('POST /multiply ',  () => {
    it('respond with 200',  (done) => {
        request(app)
            .post('/multiply')
            .send({
                "factors": [1,2,2]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});
