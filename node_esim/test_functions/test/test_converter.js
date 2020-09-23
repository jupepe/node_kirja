/* 
Install mocha and run:

$ mocha 

or from the project main: 

$ node index.js
$ node test
*/


const expect = require("chai").expect
const converter = require("../modules/colorConverter")

describe("Color Code Converter", () => {
    describe("RGB to Hex", () => {
        it("converts rgb values", () => {
            const red = converter.rgbToHex(255, 0, 0)
            const rgray = converter.rgbToHex(134, 121, 121)

            expect(red).to.equal("ff0000")
            expect(rgray).to.equal("867979")
        })
    })

    describe("Hex to RGB", () => {
        it("converts hex values", () => {
            const red = converter.hexToRgb("ff0000")
            const orange = converter.hexToRgb("ffbf00")

            expect(red).to.deep.equal([255, 0, 0])
            expect(orange).to.deep.equal([255, 191, 0])
        })
    })
})
