
function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add("hovering");
}
function dragleave(ev) {
    ev.currentTarget.classList.remove("hovering");
}
  
function drag(ev) {
    ev.dataTransfer.setData("text/plain", "");
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    draggedElement = ev.target;
}
function drop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.remove("hovering");
    var dropTarget = ev.target.closest('.section');

    if (dropTarget && draggedElement) {
        dropTarget.appendChild(draggedElement);
        draggedElement = null;
    }
}
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.menu-content');
    const headers = section.querySelector('.menu-header')
    const isDisplayed = content.style.display === 'block';
    if(isDisplayed){
        content.style.display  = 'none';
        headers.style.opacity = 0.5;
    } else{
        content.style.display = 'block';
        headers.style.opacity = 1;
    }
  }