/**
 *
 * Constructor to
 *
 * Select ui
 *
 * Elements
 *
 */
function UI(el) {
  this.el = el;
}

// Function to get input values
UI.prototype.val = function(val) {
  if (val) {
    return (this.el.value = val);
  } else if (val === '') {
    return (this.el.value = '');
  } else {
    return this.el.value;
  }
};

// Function to select text content
UI.prototype.text = function(val = '') {
  if (val != '') {
    this.el.textContent = val;
  } else {
    this.el.textContent;
  }
  return this;
};

//Function to get inner html
UI.prototype.html = function(val = '') {
  if (val != '') {
    return (this.el.innerHTML = val);
  } else {
    return this.el.innerHTML;
  }
};

//Function to add event
UI.prototype.on = function(event, func) {
  return this.el.addEventListener(event, func);
};

// Validate the value
UI.prototype.value_is_int = function() {
  if (isNaN(this.el.value)) {
    return false;
  } else {
    return true;
  }
};

// Check if value is empty
UI.prototype.value_is_empty = function() {
  if (this.el.value == '') {
    return true;
  } else {
    return false;
  }
};

// Add class function
UI.prototype.addClass = function(className) {
  this.el.classList.add(className);
  return this;
};

// Remove class function
UI.prototype.removeClass = function(className) {
  this.el.classList.remove(className);
  return this;
};

// Function to disable the element
UI.prototype.disable = function() {
  return (this.el.disabled = true);
};

// Reset element
UI.prototype.reset = function() {
  return this.el.reset();
};

// Remove event listener from element
UI.prototype.removeEvent = function(event, func, bool) {
  return this.el.removeEventListener(event, func, bool);
};

export default UI;
