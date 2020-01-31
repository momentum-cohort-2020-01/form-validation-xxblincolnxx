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
const ccv = document.querySelector('#ccv')
const expiration = document.querySelector('#expiration')
const submitButton = document.querySelector('#submit-button')

// GENERAL SHEET FUNCTIONS

parkingForm.addEventListener('submit', function (e) {
  e.preventDefault()
  checkEmptyFields()
})

function markInvalid(element) {
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