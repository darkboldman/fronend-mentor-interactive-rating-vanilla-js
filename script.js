const rateUsCard = document.querySelector('.rate-us-card')
console.log(rateUsCard)
const thankYouCard = document.querySelector('.thank-you-card')
console.log(thankYouCard)
const submitButton = document.querySelector('.submit')
console.log(submitButton)
const rating = document.getElementById('rating')
console.log(rating)
const rateNumber = document.querySelectorAll('li')
console.log(rateNumber)


submitButton.addEventListener('click', ()=> {
    thankYouCard.classList.remove('hidden')
    rateUsCard.style.display = 'none'
})

rateNumber.forEach((number) => {
    number.addEventListener('click', () => {
        rating.innerHTML = number.innerHTML
    })
})
