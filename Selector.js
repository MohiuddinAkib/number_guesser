import UI from './library';

// Function to select ui elem
const $ = function(el) {
  return new UI(document.querySelector(el));
};
export default $;
