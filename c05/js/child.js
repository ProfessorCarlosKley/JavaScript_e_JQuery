// Select the starting point and find its children.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Change the values of the children's class attributes.
firstItem.className = 'complete';
lastItem.className = 'cool';
function alterar() {
    var mudacor = document.getElementsByClassName('complete');
    mudacor[0].style.backgroundColor = "gray";
    var mudacor = document.getElementsByClassName('cool');
    mudacor[0].style.backgroundColor = "yellow";
    var mudacor = document.getElementsByClassName('hot');
    mudacor[0].style.backgroundColor = "red";
}