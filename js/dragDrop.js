let dragSrcEl = null;

addEventListener("load", () => {
    const cols = document.querySelectorAll(".drag");
    
    forEach(cols, (index, arrayItem) => {
        arrayItem.addEventListener("dragstart", handleDragStart, false);
        arrayItem.addEventListener("dragenter", handleDragEnter, false);
        arrayItem.addEventListener("dragover", handleDragOver, false);
        arrayItem.addEventListener("dragleave", handleDragLeave, false);
        arrayItem.addEventListener("drop", handleDrop, false);
        arrayItem.addEventListener("dragend", handleDragEnd, false);
    });
});


function handleDragStart(e){
    this.style.opacity = "0.4";
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move"; 
    return false;
}

function handleDragEnter(e) {
    this.classList.add("over");
}

function handleDragLeave(e) {
    this.classList.remove("over");
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if(dragSrcEl != this){
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
}

function handleDragEnd(e) {
    forEach(document.querySelectorAll(".drag"), (i, item) => {
        item.classList.remove("over");
        item.style.opacity = "";
    });
}

function forEach(array, callback, scope){
    for(let i = 0; i < array.length; i++){
        callback.call(scope, i, array[i]);
    }
}