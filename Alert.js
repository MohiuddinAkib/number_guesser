const showAlert = function(msg, type) {
  if (document.querySelector('.notification')) {
    document.querySelector('.notification').remove();
  }
  // Create notification div
  const div = document.createElement('div');
  // Giving the div a class
  div.className = `notification ${type}`;
  // Creating text node
  const text = document.createTextNode(msg);
  // Inserting the text inside div
  div.appendChild(text);
  // inserting the alert inside dom
  document
    .querySelector('.column')
    .insertBefore(div, document.querySelector('.card'));
  // Removing the notification after 3s
  setTimeout(() => div.remove(), 3000);
};

export default showAlert;
