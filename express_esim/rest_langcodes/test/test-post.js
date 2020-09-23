const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()

chai.use(chaiHttp)

it('should add a SINGLE lang on route /add POST', () =>
    chai.request(server)
        .post('/add')
        .send("name=Germany&code=de")
        .then((res) => {
            console.log(res.body)
            res.should.have.status(200)
            res.should.be.json
            res.body.should.be.a('object')
            res.body.should.have.property('code')
            res.body.should.have.property('name')
            res.body.code.should.equal('de')
            res.body.name.should.equal('Germany')
        })
        .catch(function (err) {
            throw err;
        })
)
