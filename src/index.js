import Tooltip from './ninja-ui/tooltip';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
console.log(tooltips);

tooltips.forEach((tip) => {
    console.log(tip)
    const tooltip = new Tooltip(tip)
    tooltip.init();
})

// //Find the number of tooltips
// const numberOfToolTips = document.querySelectorAll('.tooltip').length
// console.log(numberOfToolTips)

// for (let i = 0; i<numberOfToolTips; i++){
//     const tooltip = new Tooltip(document.querySelectorAll('.tooltip')[i]);
//     tooltip.init()
// }

