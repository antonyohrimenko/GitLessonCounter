const minusBtn = document.querySelector('#counter__btn-minus')
const plusBtn = document.querySelector('#counter__btn-plus')
const counterValue = document.querySelector('#counter__value')


let counter = 0

const plusHandler = () => {
  counter++
  counterValue.innerText = counter
}

const minusHandler = () => {
  counter--
  counterValue.innerText = counter
}

plusBtn.addEventListener('click', plusHandler)
minusBtn.addEventListener('click', minusHandler)