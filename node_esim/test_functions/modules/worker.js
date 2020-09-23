class Person {
    constructor(name) {
        this.name = name
    }

    toString() {
        return `${this.name}`
    }
}

class Worker extends Person {
    constructor(name, jobTitle) {
        super(name)
        this.jobTitle = jobTitle
    }

    toString() {
        return `${super.toString()}, ${this.jobTitle}`
    }
}

module.exports = Worker