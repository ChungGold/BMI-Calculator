// set up express
const express = require('express');
const app = express();

// set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// listen to port 3000
app.listen(3000);

// Get request
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

// parser data

app.post("/", function(req, res) {
    let ht = parseFloat(req.body.ht);
    let wt = parseFloat(req.body.wt);

    let bmi = bmiCalculator(wt, ht);

    console.log(bmi);

});

// BMI calculator
function bmiCalculator(wt, ht){
    let weight = (wt*0.45359237);
    let height = (ht*0.0254);
    let bmi = Math.round(weight/Math.pow(height,2));

    if(bmi<18.5){
    return `Your BMI is ${bmi}. That is considered underweight.`  
    }
    if(bmi>=18.5 && bmi<=24.9){
    return `Your BMI is ${bmi}. That is considered healthy weight.`  
    }
    if(bmi>=25.0 && bmi<=29.9){
    return `Your BMI is ${bmi}. That is considered overweight.`  
    }
    if(bmi>=30.0){
    return `Your BMI is ${bmi}. That is considered obese.`  
    }
}


