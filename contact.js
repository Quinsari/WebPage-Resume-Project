function validate() {
    let name = document.forms["contactSignup"]["uName"];
    let number = document.forms["contactSignup"]["phone"];
    let company = document.forms["contactSignup"]["company"];
    let salary = document.forms["contactSignup"]["offer"];
    let bribe = document.forms["contactSignup"]["bribe"];
    let errorMessage = document.getElementById("errors");
    let errors = false;
    errorMessage.innerHTML = '';
    
    
    if (name.value == ""){
      errorMessage.innerHTML += '<br/>- Don\'t hide like a coward!';
      errors = true;
      name.style.borderColor = "red";
    }
    else{
      name.style.borderColor = "black";
    }

    if(number.value.length != 10){
      errorMessage.innerHTML += '<br/>- How do I call that?';
      errors = true;
      number.style.borderColor = "red";
    }
    else{
      number.style.borderColor = "black";
    }

    if(company.value == ""){
      errorMessage.innerHTML += '<br/>- Who are you working for?';
      errors = true;
      company.style.borderColor = "red";
    }
    else{
      company.style.borderColor = "black";
    }

    if(salary.value < 80000){
      errorMessage.innerHTML += '<br/>- Don\'t try to lowball me!';
      errors = true;
      salary.style.borderColor = "red";
    }
    else{
      salary.style.borderColor = "black";
    }

    if(bribe.value == "" || bribe.value < 100){
      errorMessage.innerHTML += '<br/>- Bribe low, application trashed.';
      errors = true;
      bribe.style.borderColor = "red";
    }
    else{
      bribe.style.borderColor = "black";
    }

    if(errors){
      errorMessage.style.visibility = "visible";
    }
    else{
      errorMessage.style.visibility = "hidden";
      errorMessage.innerHTML = '';
      alert("Thank you for your generous offer!");
    }

 }

 window.onload=function(){
   let hiring = document.getElementById("hire");
   hiring.addEventListener("click", function(event){
      validate();
      event.preventDefault();
   });
 }