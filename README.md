# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  
  - [Screenshot](#screenshot)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

### Screenshot

<img src="/design/desktop-design.jpg">
<img src="/design/mobile-design.jpg">

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links
<a href="https://heisemmaco-dev.github.io/age-calculator-app-main/">Live Site</a>

### Built with

- Semantic HTML5 markup
- SASS with CSS custom properties
- Flexbox
- javascript

### What I learned

In this project, I've gained knowledge about how to work with date by getting todays date, month and year i really love doing this challenge, because it was a litter bit harder than the once i have been doing. 

```html
<section>

      <h1><span class="year_output">- -</span> years</h1>
      <h1><span class="month_output">- -</span> months</h1>
      <h1><span class="day_output">- -</span> days</h1>

</section>
```
what i enjoyed most using SCSS is nesting
```scss

        &[type=number]::-webkit-inner-spin-button,&[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
```
```js
// get todays day, month and year

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

```

### Continued development

I'd like to deepen my understanding of using JavaScript to manipulate the DOM, improving my knowledge of JavaScript syntax for modifying the appearance and functionality of a webpage's frontend. Can you assist me in refining these skills?"

## Author

- Frontend Mentor - [@Moderateemmaco](https://www.frontendmentor.io/profile/Moderateemmaco)
- Twitter - [@heisemmaco-dev](https://www.github.com/heisemmaco-dev)
