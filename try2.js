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



// SUMBIT EVENT:

parkingForm.addEventListener ('submit', function(e){
  let errorMessages = []
  e.preventDefault()
// CHECK EMPTIES
  for (let element of formElements) {
    if (element.value === "") {
      markInvalid(element)
      element.value = "*REQUIRED FIELD*"
    } else {
      markValid(element)
    }
  }
// CVV CHECK:
  if (cvv.value.length !== 3) {
    errorMessages.push("CVV must be exactly 3 digits")
    markInvalid(cvv)
  } else {
    markValid(cvv)
  }
  
  if (errorMessages.length > 0) {
    e.preventDefault()
    errorBox.innerText = errorMessages.join(', ')
  } else {
    alert("Form Submitted")
  }
})

// VALID / INVALID FUNCTIONS:

function markInvalid(element) {
  formInvalid = true;
  errorBox.classList.remove("alert")
  errorBox.classList.remove("alert-danger")
  errorBox.classList.add("alert")
  errorBox.classList.add("alert-danger")
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

// INDIVIDUAL CHECKS:

function checkCvv (){
  if (cvv.value.length !== 3) {
    errorMessages.push("CVV must be exactly 3 digits")
    markInvalid(cvv)
  } else {
    markValid(cvv)
  }
}