const scrolleableSet = document.querySelector('.categories-element-wrapper');
const categoriesElement = document.querySelector('.categories-element');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener("click", () =>{
    let width = categoriesElement.offsetWidth;
    scrolleableSet.scrollLeft -= width + 15;
})

rightArrow.addEventListener("click", () =>{
    let width = categoriesElement.offsetWidth;
    scrolleableSet.scrollLeft += width + 15;
})
