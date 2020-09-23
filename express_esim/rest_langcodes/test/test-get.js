const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()

chai.use(chaiHttp)

it('should list ALL langs on / GET', async () =>
    chai.request(server)
        .get('/')
        .then((res) => {
            console.log(res.body)
            res.should.have.status(200)
            res.should.be.json
            res.body.should.be.a('array')
            res.body.should.have.lengthOf(5)
            //done()
        })
        .catch(function (err) {
            throw err;
        })
)
