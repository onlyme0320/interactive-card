const displayName = document.getElementById('name');
const displayNumber = document.getElementById('number');
const displaySsid = document.getElementById('ssid');
const displayMonth = document.getElementById('displayMonth');
const Expyear = document.getElementById('displayYear');
const formDiv = document.getElementById('form');


const nameInput = document.getElementById('card-name');
const cardNumberInput = document.getElementById('card-number');

const expiryMonth = document.getElementById('month');
const expiryYear = document.getElementById('year');
const cvvInput = document.getElementById('cvv');
const confirmBtn = document.getElementById('confirm');
const cvcError = document.getElementById('demo2');
const expDate = document.getElementById('demo1');
const cardFormat = document.getElementById('wrong-format');
const congrats = document.getElementById('confirmation')


confirmBtn.addEventListener("click",()=> {

    if(cvvInput.value==""){
      cvcError.style.display = "block";
      cvvInput.style.border = "1px solid red";
    };

    if(expiryYear.value==""){
        expDate.style.display = "block";
        expiryYear.style.border = "1px solid red";
    };
    if(expiryMonth.value==""){
        expDate.style.display = "block";
        expiryMonth.style.border = "1px solid red";
    };



    // };
    if(nameInput.value == ""){
        nameInput.style.border = "1px solid red";

    if(cardNumberInput.value == "")
        cardNumberInput.style.border = "1px solid red";

    if(expiryMonth.value == "")
        expiryMonth.style.border = "1px solid red";
    
    if(expiryYear.value == "")
        expiryYear.style.border = "1px solid red";

    if(cvvInput.value == "")
        cvvInput.style.border = "1px solid red";
        return;

    }else if(nameInput.value !== "" && cardNumberInput.value !== "" && expiryMonth.value !== "" && expiryYear.value !== "" && cvvInput.value !==''){
        formDiv.style.display = "none";
        congrats.style.display = "block";


        return;
        // document.write("<h1>THANK YOU!</h1>")
    };
});

// For the Name(Card name input target)
nameInput.addEventListener('input',()=>{
    let inputName = nameInput.value
    displayName.innerHTML = inputName;



});
// For the Number(Card number input target)
cardNumberInput.addEventListener('input',()=>{
    let inputNumber = cardNumberInput.value

    displayNumber.innerHTML = inputNumber;
    displayNumber.style.letterSpacing = "5px";

// ([^0-9]) A global search for numbers that are not from 0-9
    let digitMatch = inputNumber.match(/[^0-9]/g)
      if(digitMatch){
         cardNumberInput.style.border = "1px solid red";
         cardFormat.style.display = "block";
         cardNumberInput.style.border = "1px solid red";
         return 
      }else{
        cardFormat.style.display = "none";
        return 
      };

});
// For the CVV(Cvv input target)
cvvInput.addEventListener('input',()=>{
    let cvvDisplay = cvvInput.value
    displaySsid.innerHTML = cvvDisplay;

    
});

// For the Expiry Date input target (MM/YY)

expiryMonth.addEventListener('input',()=>{
    let monthInput = expiryMonth.value
    displayMonth.innerHTML = monthInput;
});

expiryYear.addEventListener('input',()=>{
    let yearInput = expiryYear.value
    displayYear.innerHTML = yearInput;


});


// Error Alert for all(Letters and Numbers)




function letterError() {
    let letterOnly = nameInput.value
    let letterMatch = letterOnly.match(/[a-z]/g)
    if(!letterMatch){
        nameInput.style.border = "2px solid red";
    }
}

function cvvError() {
    let digitOnly = cvvInput.value
    let digitMatch = digitOnly.match(/[0-9]/g)
    if(!digitMatch){
        cvvInput.style.border = "2px solid red";
    }
}

function yearError() {
    let digitOnly = expiryYear.value
    let digitMatch = digitOnly.match(/[0-9]/g)
    if(!digitMatch){
        expiryYear.style.border = "2px solid red";
    }
}



// CONFIRM BUTTON DISPLAY





