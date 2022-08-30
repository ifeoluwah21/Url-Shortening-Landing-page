# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Shortly URL shortening API Challenge solution](#frontend-mentor---shortly-url-shortening-api-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Mobile](#mobile)
      - [Laptop](#laptop)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot
#### Mobile
<img width="375px" src="./images/mobile-version.png" alt="screenshot of mobile">

#### Laptop

<img width="375px" src="./images/laptop-version.png" alt="screenshot of mobile version">

### Links

- Solution URL: [Git repo](https://github.com/ifeoluwah21/Url-Shortening-Landing-page)
- Live Site URL: [Live Site](https://ifeoluwah21.github.io/Url-Shortening-Landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learnt about using the browser api to copy a text to the clipboard.


```js
const copyText = "Random dummy text here";
navigator.clipboard.writeText(copyText);
```

## Author

- Frontend Mentor - [@ifeoluwah21](https://www.frontendmentor.io/profile/ifeoluwah21)
- Twitter - [@_ifeoluwaaa](https://twitter.com/_ifeoluwaaa)