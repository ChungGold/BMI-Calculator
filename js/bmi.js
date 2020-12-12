function bmiButton(){
    var weight=prompt("How much do you weigh in pounds?");
    var height=prompt("How tall are you in inches?");
    alert(bmiCalculator(weight,height));
}

function bmiCalculator(weight,height){
    var weight=(weight*0.45359237);
    var height=(height*0.0254);
    var bmi=Math.round(weight/Math.pow(height,2));
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