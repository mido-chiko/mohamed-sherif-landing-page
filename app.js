/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
//setting variable for the program starting time
const startingTime = performance.now();
//building unordered list to be the base of the navigation menu on the top of the site
let newUlElement=document.createElement('ul');
    document.body.prepend(newUlElement);
    newUlElement.classList.add('melga');
//collecting the sections in 1 array
const xyzx =document.getElementsByTagName('h2');
/*creating a separate li for each section and append them to the main list also
inserting the name of the section to them and giving each of them unique ID*/
for (let xy = 0; xy < xyzx.length; xy++) {
  let newliElement= document.createElement('li');
  newliElement.textContent = xyzx[xy].textContent;
  newliElement.classList.add('melg');
  xyzx[xy].id = 'idStr' + xy ;
  newUlElement.appendChild(newliElement);
};
/*
- collection the newly created lis in one array,
- adding effect for moving the mouse over the navigation panel,
- adding listener for the click to let the browser Scroll to Anchor
- adding listener with if statement nested in for loop to highlight which section is being viewed while scrolling through the page.

*/
const knwy =document.getElementsByClassName('melg');
for (let i = 0; i < knwy.length; i++) {
  knwy[i].addEventListener('mouseover', function () {knwy[i].style.color = "rgb(25, 74, 166)";} ) ;
  knwy[i].addEventListener('mouseout', function () {knwy[i].style.color = "";} );
  knwy[i].addEventListener('click', function () {window.location.hash = '#idStr'+i;});
  document.addEventListener('scroll', function () {
    if ((xyzx[i].getBoundingClientRect().top + xyzx[i].getBoundingClientRect().height)>=200) {
  knwy[i].style.backgroundColor = "";
  } else {

    knwy[i].style.backgroundColor = "rgb(89,89,89)";
    if (i > 0) {
        knwy[i-1].style.backgroundColor = "";
    } else {

    }


  };
  });
};
//setting variable for the program ending time and calculating the code time taken
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
//end of code
