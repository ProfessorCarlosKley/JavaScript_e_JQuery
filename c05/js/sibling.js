// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;
prevItem.className = 'complete';
nextItem.className = 'cool';
// Change the values of the siblings' class attributes

function alterar() {
    var mudacor = document.getElementsByClassName('complete');
    mudacor[0].style.backgroundColor = "#adaaef";
    var mudacor = document.getElementsByClassName('cool');
    mudacor[0].style.backgroundColor = "#adddef";
    var mudacor = document.getElementsByClassName('hot');
    mudacor[0].style.backgroundColor = "#acc";

}