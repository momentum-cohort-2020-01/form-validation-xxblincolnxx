// THINGS TO REMEMBER
// Class for Validated = 'input-valid'
// Class for Invalid = 'input-invalid'
// To obtain a value use 'element.value'


// VARIABLES
const formElements = document.querySelectorAll('.validate')
const parkingForm = document.querySelector('#parking-form')
const name = document.querySelector('#name')
const carYear = document.querySelector('#car-year')
const carMake = document.querySelector('#car-make')
const carModel = document.querySelector('#car-model')
const startDate = document.querySelector('#start-date')
const days = document.querySelector('#days')
const creditCard = document.querySelector('#credit-card')
const cvv = document.querySelector('#cvv')
const expiration = document.querySelector('#expiration')
const submitButton = document.querySelector('#submit-button')
const total = document.querySelector('#total')
const errorBox = document.querySelector('#error-box')

let currentTime = moment()

let errorMessages=[]

let formInvalid = false


// let compareCarYear = moment(carYear.value, 'YYYY')
// let compareStartDate = moment(startDate.value, 'MM-DD-YYYY')

// GENERAL SHEET FUNCTIONS

parkingForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // errorMessages = []
  // formInvalid = false
  checkEmptyFields()
  checkCarYear()  
  checkStartDate()
  checkDay()
  checkCvv()
  // showPrice()
  formValidate()
//   if (errorMessages.length === 0) {
//     let totalCost= "test text blah blah blah blah"
//     total.innerText="Your total is: "+totalCost
//     total.classList.add("alert")
//   }
//   else {
//     total.classList.remove("alert")
//     errorBox.innerText = errorMessages.join (', ')
//     // errorBox.classList.add ("alert", "alert-danger")
//     // e.preventDefault()
//   }
})


function markInvalid(element) {
  formInvalid = true;
  if (element.parentElement.className == "input-group") {
    element.parentElement.parentElement.classList.add("input-invalid")
    element.parentElement.parentElement.classList.remove("input-valid")
  } else {
    element.parentElement.classList.add("input-invalid")
    element.parentElement.classList.remove("input-valid")
  }
}

function markValid(element) {
  if (element.parentElement.className == "input-group") {
    element.parentElement.parentElement.classList.add("input-valid")
    element.parentElement.parentElement.classList.remove("input-invalid")
  } else {
    element.parentElement.classList.add("input-valid")
    element.parentElement.classList.remove("input-invalid")
  }
}

// TOTAL FORM VALIDATION 

function formValidate() {
  if (errorMessages.length === 0) {
    let totalCost= "test text blah blah blah blah"
    total.innerText="Your total is: "+totalCost
    total.classList.add("alert")
  }
  else {
    total.classList.remove("alert")
    errorBox.innerText = errorMessages.join (", ")
    errorBox.classList.add ("alert", "alert-danger")
    e.preventDefault()
  }
}

// SPECIFIC VALIDATION TASKS

function checkEmptyFields() {
  for (let element of formElements) {
    if (element.value === "" || element.value ==="*REQUIRED FIELD*") {
      markInvalid(element)
      element.value = "*REQUIRED FIELD*"
    } else {
      markValid(element)
    }
  }
}

// INDIVIDUAL FIELD FUNCTIONS

        // * Car year must be a number.
        // * Car year must be after 1900.
        // * Car year cannot be in the future.
        // * Date parking must be in the future.
        // * Number of days must be a number.
        // * Number of days must be between 1 and 30.
        // * CVV must be a three-digit number.

function checkCarYear(){
  if(isNaN(carYear.value)){
    markInvalid(carYear);
    errorMessages.push("car year must be a number")
  } else if (carYear.value<1900){ //EVAL RELATIVE TO 1900
    markInvalid(carYear)
    errorMessages.push("car year must be after 1900")
  } else if (currentTime.isBefore(carYear.value)){ //EVAL FUTURE
    markInvalid(carYear)
    errorMessages.push("car year cannot be in future")
  }
  else {
    carYear.parentElement.classList.add ("input-valid")
  }
}

function checkStartDate(){
  if(currentTime.isAfter(startDate.value)){
    markInvalid(startDate)
    errorMessages.push("start date must be a future date")
  }
}

function checkDay(){
  if (isNaN(days.value)){
    markInvalid(days)
    errorMessages.push("number of days must be a numer")
  } else if (days.value<1 || days.value>30){
    markInvalid(days)
    errorMessages.push("number of days must be between 1 and 30")
  }
}

function checkCvv(){
  if (cvv.value.length!==3){
    markInvalid(cvv)
    errorMessages.push("CVV can only contain 3 digits")
  }
}
