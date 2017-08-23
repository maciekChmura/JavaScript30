////01 javascript drum kit
document.querySelector() //select first in document
document.querySelectorAll() //select all in document as node list

div.classList.add("foo") //add class foo
div.classList.remove("bar") //remove class bar

////02 js and css clock
const now = new Date(); //new date object
const seconds = now.getSeconds(); //save seconds in variable
const secondDegrees = ((seconds / 60) * 360) + 90; //convert seconds to degrees

////03 change css variables with js
style.setProperty(propertyName, value, priority); //set a new value for a property on a CSS style declaration object

////04 array cardio day 1
//filter
const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; //keep it
    }
});
//with arrow function:
const fifteenArrow = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);
console.table(fifteenArrow);

//map
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);

//sort
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//reduce
const totalYears = inventors.reduce((total, inventor) => {
    return total += inventor.passed - inventor.year;
}, 0);
console.log(totalYears);


//// 05 flex panel gallery

div.classList.toggle() //// if visible is set remove it, otherwise add it

