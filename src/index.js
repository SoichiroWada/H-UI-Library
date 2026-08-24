import Tooltip from './ninja-ui/tooltip';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
console.log(tooltips);
console.log(document.querySelectorAll('.tooltip')[0])

//Find the number of tooltips
const numberOfToolTips = document.querySelectorAll('.tooltip').length
console.log(numberOfToolTips)

const tooltip1 = new Tooltip(document.querySelectorAll('.tooltip')[0]);
tooltip1.init();

const tooltip2 = new Tooltip(document.querySelectorAll('.tooltip')[1]);
tooltip2.init();

const tooltip3 = new Tooltip(document.querySelectorAll('.tooltip')[2]);
tooltip3.init();

