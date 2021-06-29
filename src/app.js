const clickBtn = document.getElementById('clickBtn')
const number = document.getElementById('number')

clickBtn.addEventListener('click', () => {
    let numberCount = parseInt(number.innerHTML)
    numberCount++
    number.innerHTML = numberCount
    console.log(number.innerHTML)
})