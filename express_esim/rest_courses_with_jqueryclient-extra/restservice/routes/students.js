//const Student = require('../models/student') // DataModel reference if DataModel is used
const express = require('express')
const router = express.Router()

const cors = require('cors') // CORS support 

router.use(cors()) // CORS allow Cross Origin requests for this server
// Now Router support CORS request for any client
// You must use CORS with router in this kind of application where router routes path to the right functions


module.exports = router

// Defining the model saving information of all students
// In a real app real database should be used.
// Then there is also module 'student' which handles all CRUD operations
// for the data
let lastInsertedId = 6

let students = [
    {
        "id"    : 1,
        "name"  : "Jack",
        "course": "Java",
        "grade" : "5"
    },
    {
        "id"    : 2,
        "name"  : "Anne",
        "course": "Java",
        "grade" : "3"
    },
    {
        "id"    : 3,
        "name"  : "Bill",
        "course": "Java",
        "grade" : "4"
    },
    {
        "id"    : 4,
        "name"  : "Jack",
        "course": "Design Patterns",
        "grade" : "1"
    },
    {
        "id"    : 5,
        "name"  : "Jill",
        "course": "Design Patterns",
        "grade" : "4"
    },
    {
        "id"    : 6,
        "name"  : "John",
        "course": "Design Patterns",
        "grade" : "2"
    }]

router.route('/students')
    // get All students
    .get(function (req, res) {
        let list = []
        for (let i in students) {
            list.push(students[i])
        }
        //return res.json(list)
        return res.json(students)
    })

    // Create a new student
    .post((req, res) => {
        console.log("Post Request: " + req.body)
        if (!req.body.hasOwnProperty('name')) {
            res.nameCode = 400
            return res.json({message: 'Error 400: No name given'})
        }
        let nextId = ++lastInsertedId

        students.push({
            "id"    : nextId,
            "course": req.body.course,
            "name"  : req.body.name,
            "grade" : req.body.grade
        })
        res.json({message: 'Student Added with id ' + nextId})
    })

// Update an existing student
router.route('/students/:id').put((req, res) => {
    const idUpdated = req.params.id
    console.log("PUT Request: " + idUpdated)
    if (!req.body.hasOwnProperty('name')) {
        res.nameCode = 400
        return res.json({message: 'Error 400: No name given'})
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === idUpdated) {
            console.log("Updated: " + i + ":" + students[i])
            students[i].course = req.body.course
            students[i].name = req.body.name
            students[i].grade = req.body.grade
            return res.json(
                {message: 'Student Updated with id ' + idUpdated})
        }
    }
})

// Delete an existing student
router.route('/students/:id').delete((req, res) => {
    const idRemoved = req.params.id
    console.log("DELETE Request: " + idRemoved)

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === idRemoved) {
            console.log("Deleted: " + i + ":" + students[i])
            students.splice(i, 1) // remove item
            return res.json(
                {message: 'Student Deleted with id ' + idRemoved})
        }
    }
})

// Search by the course name
router.route('/students/course/:course').get((req, res) => {
    let list
    const courseSearched = req.params.course
    list = []
    console.log("search: " + courseSearched)
    for (let i = 0; i < students.length; i++) {
        if (students[i].course.indexOf(courseSearched) > -1) {
            console.log(i + ":" + students[i])
            list.push(students[i])
        }
    }
    if (list.length > 0)
        return res.json(list)
    else {
        res.nameCode = 404
        res.json({message: 'Course ' + req.body.course + ' not found'})
    }
})

