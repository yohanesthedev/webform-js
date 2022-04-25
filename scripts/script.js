//request product data 
let requestURL = 'scripts/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

let products =[];

request.onload = function() {
    products = request.response;
    showProducts();
}


//shopping item table
function showProducts(){
    //show images
    const headphones = document.querySelector("#headphones");
    headphones.src = `${products[0].picture}`;
    const charger = document.querySelector("#charger");
    charger.src = `${products[1].picture}`;
    const laptop = document.querySelector("#laptop");
    laptop.src = `${products[2].picture}`;
    const speakers = document.querySelector("#speakers");
    speakers.src = `${products[3].picture}`;
    const phoneCase = document.querySelector("#phone-case");
    phoneCase.src = `${products[4].picture}`;

    //show value
    const valuehp = document.querySelector("#costhp");
    valuehp.textContent = `${products[0].cost}`;
    const valuech = document.querySelector("#costch");
    valuech.textContent = `${products[1].cost}`;
    const valuelp = document.querySelector("#costlp");
    valuelp.textContent = `${products[2].cost}`;
    const valuesp = document.querySelector("#costsp");
    valuesp.textContent = `${products[3].cost}`;
    const valuepc = document.querySelector("#costpc");
    valuepc.textContent = `${products[4].cost}`;
}


class Customer {
    constructor(fname,lname,phone,address,postal,date,city,province,payment){
      this.fname = fname;
      this.lname = lname;
      this.phone = phone;
      this.address = address;
      this.postal = postal;
      this.date = date;
      this.city = city;
      this.province = province;
      this.payment = payment;

    }
    displayCustomer(){
        let ul = document.querySelector("#customer-info");
        let name = document.createElement('li');
        name.textContent = `Name: ${this.fname}  ${this.lname}`;
        ul.appendChild(name);

        let phone = document.createElement('li');
        phone.textContent = `phone number: ${this.phone}`;
        ul.appendChild(phone);

        let address = document.createElement('li');
        address.textContent = `address: ${this.address}`;
        ul.appendChild(address);

        let postal = document.createElement('li');
        postal.textContent = `postal code: ${this.postal}`;
        ul.appendChild(postal);

        let date = document.createElement('li');
        date.textContent = `order date: ${this.date}`;
        ul.appendChild(date);

        let city = document.createElement('li');
        city.textContent = `city: ${this.city}`;
        ul.appendChild(city);

        let province = document.createElement('li');
        province.textContent = `province: ${this.province}`;
        ul.appendChild(province);

        let payment = document.createElement('li');
        payment.textContent = `payment: ${this.payment}`;
        ul.appendChild(payment);

    }
}


//display customer info on form submission
var showCustomer = (e) => {
    e.preventDefault();

    let fname = document.customer.fName.value;
    let lname = document.customer.lName.value;
    let phone = document.customer.phone.value;
    let address = document.customer.address1.value;
    let postal = document.customer.postalcode.value;
    let date = document.customer.date.value;
    let city = document.customer.city.value;
    let province = document.customer.province.value;
    let payment = document.customer.payment.value;
    
    let customer = new Customer(fname,lname,phone,address,postal,date,city,province,payment);

    return customer.displayCustomer();

}


//plus button
const plushp = document.querySelector('[plushp]');
const plusch = document.querySelector('[plusch]');
const pluslp = document.querySelector('[pluslp]');
const plussp = document.querySelector('[plussp]');
const pluspc = document.querySelector('[pluspc]');


//total and subtotals of product
let total = 0;
function calcTotal(subtotal){
    document.querySelector("#total").value= `${total + subtotal}`;
    total = total + subtotal;
}

let amounthp = 0;
let subtotalhp = 0;
document.querySelector('[plushp]').addEventListener("click", function(){
    let a = document.querySelector('#amounthp');
    amounthp += 1;
    a.textContent = `${amounthp}`;
    let b = document.querySelector('#subtotalhp');
    increment = 50;
    subtotalhp += 50;
    b.textContent = `${subtotalhp}`;
    calcTotal(increment);
});

let amountch = 0;
let subtotalch = 0;
document.querySelector('[plusch]').addEventListener("click", function(){
    let a = document.querySelector('#amountch');
    amountch += 1;
    a.textContent = `${amountch}`;
    let b = document.querySelector('#subtotalch');
    increment = 20;
    subtotalch += 20;
    b.textContent = `${subtotalch}`;
    calcTotal(increment);
});

let amountlp = 0;
let subtotallp = 0;
document.querySelector('[pluslp]').addEventListener("click", function(){
    let a = document.querySelector('#amountlp');
    amountlp += 1;
    a.textContent = `${amountlp}`;
    let b = document.querySelector('#subtotallp');
    increment = 500;
    subtotallp += 500;
    b.textContent = `${subtotallp}`;
    calcTotal(increment);
});

let amountsp = 0;
let subtotalsp = 0;
document.querySelector('[plussp]').addEventListener("click", function(){
    let a = document.querySelector('#amountsp');
    amountsp += 1;
    a.textContent = `${amountsp}`;
    let b = document.querySelector('#subtotalsp');
    increment = 200;
    subtotalsp += 200;
    b.textContent = `${subtotalsp}`;
    calcTotal(increment);
});

let amountpc = 0;
let subtotalpc = 0;
document.querySelector('[pluspc]').addEventListener("click", function(){
    let a = document.querySelector('#amountpc');
    amountpc += 1;
    a.textContent = `${amountpc}`;
    let b = document.querySelector('#subtotalpc');
    increment = 10;
    subtotalpc += 10;
    b.textContent = `${subtotalpc}`;
    calcTotal(increment);
});

//get items summary
function summary(){
    let texthp = document.querySelector("#amounthp").textContent
    let ol = document.querySelector("#customer-order");
    let lihp = document.createElement('li');
    lihp.textContent = `Headphones: ${texthp}`;
    ol.appendChild(lihp);
    
    let textch = document.querySelector("#amountch").textContent
    let lich = document.createElement('li');
    lich.textContent = `Charger: ${textch}`;
    ol.appendChild(lich);

    let textlp = document.querySelector("#amountlp").textContent
    let lilp = document.createElement('li');
    lilp.textContent = `Laptop: ${textlp}`;
    ol.appendChild(lilp);

    let textsp = document.querySelector("#amountsp").textContent
    let lisp = document.createElement('li');
    lisp.textContent = `Speakers: ${textsp}`;
    ol.appendChild(lisp);

    let textpc = document.querySelector("#amountpc").textContent
    let lipc = document.createElement('li');
    lipc.textContent = `Phone case: ${textpc}`;
    ol.appendChild(lipc);
}


//display customer info and orders
document.customer.addEventListener("submit", showCustomer);
document.customer.addEventListener("submit", summary);
