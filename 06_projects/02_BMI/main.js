const form=document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent the default form submission behavior, otherwise the page will reload, and all input will be lost.
    
    const height=parseFloat(document.querySelector("#height").value);
    const weight=parseFloat(document.querySelector("#weight").value);
    const results=document.querySelector("#results");
    const bwiCategory=document.querySelector("#bwi-category");
    const bmi=(weight / ((height * height)/10000)).toFixed(2);
    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.innerHTML="Please enter valid positive numbers for height and weight.";
    }
    
    else{
        
        results.innerHTML=`<span>Your BMI is ${bmi}.</span>`;
    }

    if(bmi < 18.6) {
        bwiCategory.innerHTML="You are underweight.";
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        bwiCategory.innerHTML="You have a normal weight.";
    } else if(bmi >= 25 && bmi <= 29.9) {
        bwiCategory.innerHTML="You are overweight.";
    } else {
        bwiCategory.innerHTML="You are obese.";
    }   
})