import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
console.log(tooltips);

tooltips.forEach((tip) => {
  const tooltip = new Tooltip(tip)
  tooltip.init();
});

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
