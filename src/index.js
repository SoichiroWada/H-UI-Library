import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
console.log("tooltips:", tooltips);

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

// create tabs
const container = document.querySelector('.tabs');
console.log('container:', container)

const tabs = new Tabs(container);
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});