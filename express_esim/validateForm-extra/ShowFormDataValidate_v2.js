const express = require('express')
// Use express-validator
const {check, validationResult} = require('express-validator')
const logger = require('morgan')

const app = express()

app.set('view engine', 'pug')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(logger('dev'))

const nameErrMsg = 'Name length between 5 and 30 characters and only letters.'
const ageErrMsg = 'Age between 12-90.'

app.get('/', (req, res) => {
    res.render('form')
})

app.post('/validate-fields',
    [
        check('name')
            .exists()
            .isLength({min: 5, max: 15})
            .withMessage('Name must have 5-15 characters!')
            .trim()
            .matches(/^([a-zA-ZåöäÅÖÄ]+)\s([a-zA-ZåöäÅÖÄ]+)$/,
                "i") // "i" == ignore case
            .withMessage(
                'Name should include only letters and space between Words!'),

        check('age')
            .not().isEmpty()
            .isInt()
            .isLength({min: 1, max: 2}),

        check('weekday', 'Choose a weekday')
            .optional()
            .isIn(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']),

        check('email', 'Your email is not valid')
            .not().isEmpty()
            .isEmail()
            .normalizeEmail()

    ],
    (req, res) => {
        // check the validation object for errors
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            //const errorArr = []
            //errors.array().map(err => errorArr.push({ [err.param]: err.msg }))

            return res.status(422).json({errors: errors})
        } else {
            // getting the form variablse
            const name = req.body.name
            const age = req.body.age
            res.render('errorForm', {name: name, age: age})
        }

        console.log(req.body) // Shows all text in query string URL

    })

app.listen(process.env.PORT || 3000)