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

  // e.preventDefault()

// CHECK EMPTIES
  for (let element of formElements) {
    if (element.value === "") {
      markInvalid(element)
      element.parentElement.lastElementChild.innerText = "*"
      element.parentElement.lastElementChild.style = "color: red;"
      if (!errorMessages.includes ("* Required Field")){
        errorMessages.push("* Required Field")
      } 
    } else {
      markValid(element)
      element.parentElement.lastElementChild.innerText = ""
    }
  }
// CARYEAR CHECKS

  if(isNaN(carYear.value)){
    markInvalid(carYear);
    errorMessages.push("Car year must be a number")
  } else if (carYear.value<1900){ //EVAL RELATIVE TO 1900
    markInvalid(carYear)
    errorMessages.push("Car year must be after 1900")
  } else if (currentTime.isBefore(carYear.value)){ //EVAL FUTURE
    markInvalid(carYear)
    errorMessages.push("Car year cannot be in future")
  }
  else {
    carYear.parentElement.parentElement.classList.add ("input-valid")
  }

// STARTDATE CHECK
  if(currentTime.isAfter(startDate.value)){
    markInvalid(startDate)
    errorMessages.push("Start date must be a future date")
  }

// CHECK DAY
  if (isNaN(days.value)){
    markInvalid(days)
    errorMessages.push("Number of days must be a numer")
  } else if (days.value<1 || days.value>30){
    markInvalid(days)
    errorMessages.push("Number of days must be between 1 and 30")
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
    errorBox.innerText = errorMessages.join('\n')
  } else {
    alert("Form Submitted")
  }
})

// VALID / INVALID FUNCTIONS:

function markInvalid(element) {
  // formInvalid = true;
  errorBox.classList.remove("alert")
  errorBox.classList.remove("alert-danger")
  errorBox.classList.add("alert")
  errorBox.classList.add("alert-danger")
  if (element.parentElement.className === "input-group") {
    element.parentElement.parentElement.classList.add("input-invalid")
    element.parentElement.parentElement.classList.remove("input-valid")
  } else {
    element.parentElement.classList.add("input-invalid")
    element.parentElement.classList.remove("input-valid")
  }
}

function markValid(element) {
  if (element.parentElement.className === "input-group") {
    element.parentElement.parentElement.classList.add("input-valid")
    element.parentElement.parentElement.classList.remove("input-invalid")
  } else {
    element.parentElement.classList.add("input-valid")
    element.parentElement.classList.remove("input-invalid")
  }
}

function calculateCharges() {
  let endDate = moment().add('days', days.value)
}