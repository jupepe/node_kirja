const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()

chai.use(chaiHttp)

it('should update a SINGLE lang on route /update PUT', () =>
    chai.request(server)
        .put('/update')
        .send("name=Suomi&code=fi&id=1")
        .then((res) => {
            console.log(res.body)
            res.should.have.status(200)
            res.should.be.json
            res.body.should.be.a('object')
            res.body.should.have.property('id')
            res.body.should.have.property('code')
            res.body.should.have.property('name')
            res.body.code.should.equal('fi')
            res.body.name.should.equal('Suomi')
            res.body.id.should.equal('1')
        })
        .catch(function (err) {
            throw err;
        })
)
