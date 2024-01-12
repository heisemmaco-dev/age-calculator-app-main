// get the inputs
let inputDay = document.querySelector('#day_input')
let inputMonth = document.querySelector('#month_input')
let inputYear = document.querySelector('#year_input')

// get the form element
let form = document.querySelector('form')

//get the output 
let outputDay = document.querySelector('.day_output')
let outputmonth = document.querySelector('.month_output')
let outputyear = document.querySelector('.year_output')

form.addEventListener('submit', handlerSubmit) 

// get todays day, month and year

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// the days in the month

const dayInTheMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// validator

function validate() {
    const inputs = form.querySelectorAll('input')

    let validator = true;

    inputs.forEach((i) => {
        const parent = i.parentElement;

        if (!i.value) {
            i.style.borderColor = 'red';
            parent.querySelector('label').style.color = 'red';
            parent.querySelector('small').innerHTML = 'This field is required';
            validator = false;
            return;
        } else if (inputDay.value > dayInTheMonths[inputMonth.value - 1] || inputDay.value < 1) {
            inputDay.style.borderColor = 'red';
            inputDay.parentElement.querySelector('label').style.color = 'red';
            inputDay.parentElement.querySelector('small').innerHTML = 'Must be a valid day';
            validator = false;
            return;
        } else if (inputMonth.value > 12 || inputMonth.value < 1) {
            inputMonth.style.borderColor = 'red';
            inputMonth.parentElement.querySelector('label').style.color = 'red';
            inputMonth.parentElement.querySelector('small').innerHTML = 'Must be a valid month';
            validator = false;
            return;
        }else if (inputYear.value > 2024 || inputYear.value < 1) {
            inputYear.style.borderColor = 'red';
            inputYear.parentElement.querySelector('label').style.color = 'red';
            inputYear.parentElement.querySelector('small').innerHTML = 'Must be in the past';
            validator = false;
            return;
        } else {
            i.style.borderColor = 'hsl(0, 0%, 94%)'
            parent.querySelector('label').style.color = 'hsl(0, 1%, 44%)';
            parent.querySelector('small').innerHTML = '';
            validator = true
        }
    })
    return validator;
}

function handlerSubmit(e) {
    e.preventDefault()

    if (validate()) {
        if (inputDay.value > day) {
            day = day + dayInTheMonths[month - 1];
            month = month - 1;
        }

        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1
        }

        const d = day - inputDay.value
        const m = month - inputMonth.value
        const y = year - inputYear.value
        

        animateToNumber(d, 1000, outputDay)
        animateToNumber(m, 1000, outputmonth)
        animateToNumber(y, 1000, outputyear)
    }

}


// Restrict date and month input to two characters
function limitInput(input) {
    if (input.value.length > 2) {
      input.value = input.value.slice(0, 2); 
    }
  }

// Restrict year input to four characters
function limitYearInput(input) {
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4); 
    }
 }

 //animation
 function animateToNumber(targetNumber, duration, elementId) {
   // const animatedNumber = document.getElementById(elementId);
    let startTimestamp;

    function animateNumber(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      const currentNumber = Math.floor(percentage * targetNumber);
      elementId.textContent = currentNumber;

      if (percentage < 1) {
        requestAnimationFrame(animateNumber);
      }
    }

    requestAnimationFrame(animateNumber);
  }
