let dragSrcEl = null;

addEventListener("load", () => {
    const cols = document.querySelectorAll(".drag");
    [].forEach.call(cols, (c) => {
        c.addEventListener("dragstart", handleDragStart, false);
        c.addEventListener("dragenter", handleDragEnter, false);
        c.addEventListener("dragover", handleDragOver, false);
        c.addEventListener("dragleave", handleDragLeave, false);
        c.addEventListener("drop", handleDrop, false);
        c.addEventListener("dragend", handleDragEnd, false);
    });
})


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
    [].forEach.call(document.querySelectorAll(".drag"), function (c) {
        c.classList.remove("over");
        c.style.opacity = "";
    });
}