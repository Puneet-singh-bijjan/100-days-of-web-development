const fs =require('fs');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const uuid = require('uuid');

const app = express();

app.use(express.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname , 'public')));

app.set('views' , path.join(__dirname,'views'));
app.set('view engine' , 'ejs');

app.get('/' , function(req, res){
    res.render('index');
});

app.get('/about' , function(req, res){
    res.render('about');
});

app.get('/confirm' , function(req, res){
    res.render('confirm');
});

app.get('/recommend' , function(req, res){
    res.render('recommend');
});

app.post('/recommend' ,function(req,res){
    const restaurants =req.body;
    restaurants.id = uuid.v4();
    console.dir(restaurants);
    const filePath = path.join(__dirname , 'data', 'restaurants.json')
    const fileData = fs.readFileSync(filePath);
    const storedData = JSON.parse(fileData);
    storedData.push(restaurants);

    fs.writeFileSync(filePath , JSON.stringify(storedData));
    res.redirect('/confirm');
});

app.get('/restaurants' , function(req, res){

    const filePath = path.join(__dirname , 'data', 'restaurants.json')
    const fileData = fs.readFileSync(filePath);
    const storedData = JSON.parse(fileData);

    res.render('restaurants' , {numberOfRestaurants:storedData.length , restaurants:storedData});
});

app.get('/restaurants/:id' , function(req,res){
    const restaurantId = req.params.id;
    res.render('includes/restaurant-detail' , {restaurantId : restaurantId})
});


app.listen(3000);