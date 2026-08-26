import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
console.log(tooltips);

tooltips.forEach((tip) => {
    console.log(tip)
    const tooltip = new Tooltip(tip)
    tooltip.init();
});

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// //Find the number of tooltips
// const numberOfToolTips = document.querySelectorAll('.tooltip').length
// console.log(numberOfToolTips)

// for (let i = 0; i<numberOfToolTips; i++){
//     const tooltip = new Tooltip(document.querySelectorAll('.tooltip')[i]);
//     tooltip.init()
// }

