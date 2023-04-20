const liItems = document.querySelectorAll('li')
let number = 1

for (const liItem of liItems) {
    liItem.textContent = number
    liItem.dataset.id = number
    number++
}

const thirthLi = document.querySelector('[data-id="3"]')
console.log(thirthLi);

const wrapper = thirthLi.closest('.wrapper')
console.log(wrapper);