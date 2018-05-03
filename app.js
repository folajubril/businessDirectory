var express = require('express');
var mysql =  require('mysql');
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var port = 3000;
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'olanrewaju1',
    database : 'businessdirectory'
  });
  db.connect(function(err){
    if(err) console.log(err);
    
    console.log('Mysql connected successfully');
  });
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// add new business
app.post('/addbusiness', function(req, res, next){
    if( typeof req.body === 'string')
    req.body = JSON.parse(req.body)
    var newBusiness = req.body;
    console.log(newBusiness)
    //var newBusiness = {business_name: 'mybuisness',business_category: 'mining', email: 'mybusiness@email.com', contact_number:'0987654321', street_address: '12 molo street', city: 'agege', state: 'lagos', website: 'www.mybusiness.com', description:'mine for gold'}
    var sql = 'INSERT INTO businesses SET ?';
    var query = db.query(sql,newBusiness , function(error, results){
        if (error) throw error ;
        console.log(results);
        res.send('New business added successfully...');
    });

});

// get all businesses
app.get('/find', function (req, res){
    var sql = 'SELECT * FROM businesses';
    var query = db.query(sql, function(error, result){
        if (error) throw error;
        console.log(result);
        res.send(result);
    });
});

//get business by category
app.get('/find/:business_category', function(req,res){
    var sql = `SELECT * FROM businesses WHERE business_category='${req.params.business_category}' `
   var query=  db.query(sql, function(error, result){
    if (error) throw error;
    console.log(result);
    res.send(result);
    });
});

//get business by business name
app.get('/find/:business_name', function(req,res){
    var sql = `SELECT * FROM businesses WHERE business_name='${req.params.business_name}' `
   var query=  db.query(sql, function(error, result){
    if (error) throw error;
    console.log(result);
    res.send(result);
    });
});

//update business

app.get('/update/:business_name', function(req,res){
    var updatedBusiness = req.body.updatedBusiness;
    var sql = `UPDATE businesses SET ? WHERE business_category='${req.params.business_name}' `
   var query=  db.query(sql, function(error, result){
    if (error) throw error;
    console.log(result);
    res.send(result);
    });
});

// delete business
app.get('/delete/:business_name', function(req,res){
    var sql = `DELETE FROM businesses WHERE business_name='${req.params.business_name}' `
   var query=  db.query(sql, function(error, result){
    if (error) throw error;
    console.log(result);
    res.send(result);
    });
});


app.listen(port, function(){
    console.log('server started at '+ port)
});