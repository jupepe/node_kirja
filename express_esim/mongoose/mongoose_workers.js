var mongoose = require('mongoose');

// mongoose connection
mongoose.connect('mongodb://localhost/demos', {
    useNewUrlParser   : true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

// Create worker schema for mongoDb
var workerSchema = mongoose.Schema({
 id: Number,
 first_name: String,
 last_name: String,
 company: String,
 phone: Number,
});


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

var Employee = mongoose.model('Employee', workerSchema);

var emp1 = new Employee({"id":1,"first_name":"Amy","last_name":"Miller","company":"Eabox","phone":"975006815910"});
var emp2 = new Employee({"id":2,"first_name":"John","last_name":"Ferguson","company":"Bubblemix","phone":"881101293810"});
var emp3 = new Employee({"id":3,"first_name":"Betty","last_name":"Watkins","company":"Jazzy","phone":"562387886293"});
var emp4 = new Employee({"id":4,"first_name":"Daniel","last_name":"Washington","company":"Topdrive","phone":"871179598899"});
var emp5 = new Employee({"id":5,"first_name":"Judy","last_name":"Gibson","company":"Flipopia","phone":"180355457889"});

emp1.save(); 
emp2.save(); 
emp3.save(); 
emp4.save(); 
emp5.save();


 Employee.find({ id: { $gte: 1} }).exec(function (err, employees) {
  if(err) throw err;
  employees.forEach(function (emp) {
   console.log(emp['first_name'] + ' ' + emp['last_name'] + ' works for ' + emp['company'] );
  });

});


});