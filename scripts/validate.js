//validate module

function validateProfile(e){

    e.preventDefault();
    var valid = true;
  
    //display warning if firstname is not entered or first name exceeds 20 charachters
    if(customer.fName.value ==="" || customer.fName.value.length > 20){
      document.querySelector("#fNameError").textContent = "Please Enter a First Name: max 20 characters";
      valid = false;
    }
  
    //display warning if last name is not entered
    if(customer.lName.value ===""){
      document.querySelector("#lNameError").textContent = "Please Enter a Last Name";
      valid = false;
    }
  
    //display warning if phone number is not entered and does not exceed 15 digits
     if(customer.phone.value ==="" || customer.phone.value.length > 15){
        document.querySelector("#phoneError").textContent = "Please Enter a phone number";
        valid = false;
      }
    //display warning if address 1 is empty
    if(customer.address1.value ===""){
      document.querySelector("#address1Error").textContent = "Please Enter an address";
      valid = false;
    }
    
    //display warning if postal code is empty 
    if(customer.postalcode.value ===""){
        document.querySelector("#postalCodeError").textContent = "Please Enter a postal code";
        valid = false;
    }

    //display warning if order date is in the past 
    dateToday = new Date();
    parseDateToday = Date.parse(dateToday);
    dateSelected = customer.date.value;
    parseDateSelected = Date.parse(dateSelected);

    if(parseDateSelected < parseDateToday || customer.date.value ==="" ){
        document.querySelector("#dateError").textContent = "Please Enter a date in the future";
        valid = false;
    }

    //display warning if city element is empty
    if(customer.city.value ===""){
      document.querySelector("#cityError").textContent = "Please Enter a city";
      valid = false;
    }
  
    if(valid){
      alert("Thank you");
    }
    return valid;
  }
  