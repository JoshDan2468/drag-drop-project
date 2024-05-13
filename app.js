const sortableList = document.querySelectorAll (".sortable-list");
const item = document.querySelectorAll (".item");

item.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
        
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = () => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");

    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });       
    

    sortableList.insertBefore(draggingItem, nextSibling)
}

sortableList.addEventListener("dragover", initSortableList)
sortableList.addEventListener("dragenter", e => e.preventDefault());