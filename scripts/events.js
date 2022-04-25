
//remove warning if firtsname has input
document.querySelector('#fName').addEventListener("blur", function(){
    if(this.value !== "" && this.value.length < 10){
        fNameError.textContent = "";
    }
});

//remove warning if lastname has input
document.querySelector('#lName').addEventListener("blur", function(){
    if(this.value !== ""){
        lNameError.textContent = "";
    }
});

//remove warning if phone number is appropriate length
document.querySelector('#phone').addEventListener("blur", function(){
    if(this.value !== ""  && this.value.length < 15){
        phoneError.textContent = "";
    }
});

document.querySelector('#address1').addEventListener("blur", function(){
    if(this.value !== ""){
        address1Error.textContent = "";
    }
});

//remove warning if postal code has input
document.querySelector('#postalCode').addEventListener("blur", function(){
    if(this.value !== ""){
        postalCodeError.textContent = "";
    }
});

//remove warning if date is valid
document.querySelector('#date').addEventListener("blur", function(){
    if(this.value !== ""){
        dateError.textContent = "";
    }
});

//remove warning if city has input
document.querySelector('#city').addEventListener("blur", function(){
    if(this.value !== ""){
        cityError.textContent = "";
    }
});

//clear all on reset
var spans  = document.querySelectorAll('span');
spans.forEach((span) => {
  document.querySelector('input[type="reset"]').addEventListener('click', () => {
    span.textContent="";
  });
});

//clear summary on reset
var ul = document.querySelector('ul');
    document.querySelector('input[type="reset"]').addEventListener('click', () => {
        var child = ul.lastElementChild; 
        while (child) {
            ul.removeChild(child);
            child = ul.lastElementChild;
        }
    });

var ol = document.querySelector('ol');
document.querySelector('input[type="reset"]').addEventListener('click', () => {
    var child = ol.lastElementChild; 
    while (child) {
        ol.removeChild(child);
        child = ol.lastElementChild;
    }
});


   

//run validation function on submit
document.customer.addEventListener("submit", validateProfile);
