// Example 1: Adding, Modifying, and Removing Elements
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph.';
    document.getElementById('container').appendChild(newElement);
}
