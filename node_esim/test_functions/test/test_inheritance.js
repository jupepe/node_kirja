/* 
Install mocha and run:

$ mocha 

or from the project main: 

$ node index.js
$ node test
*/


const expect = require("chai").expect
const Worker = require("../modules/worker")

describe("Worker methods", () => {
    describe("add and count", () => {
        it("add, then count", () => {
            let persons = []
            persons.push(new Worker('Billy', 'Writer'))
            persons.push(new Worker('Janet', 'Boss'))
            persons.push(new Worker('Kim', 'Developer'))
            persons.push(new Worker('Jane', 'Secretary General'))
            persons.pop()
            const personCount = persons.length
            const p3 = persons[2].toString()

            expect(personCount).to.equal(3)
            expect(p3).to.equal("Kim, Developer")
        })
    })

})


describe("Worker methods", () => {
    describe("add and filter", () => {
        it("add, then filter and count", () => {
            let persons = []
            persons.push(new Worker('Billy', 'Writer'))
            persons.push(new Worker('Janet', 'Boss'))
            persons.push(new Worker('Kim', 'Developer'))
            persons.push(new Worker('Jane', 'Secretary General'))

            const filtered = persons.filter(p => p.name.match(/i/g))
            const filterCounter = filtered.length

            expect(filterCounter).to.equal(2)
            expect(filtered[1].name).to.equal("Kim")
            expect(filtered[0].name).to.equal("Billy")
        })
    })

})