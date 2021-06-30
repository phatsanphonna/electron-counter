const clickBtn = document.getElementById('clickBtn');
const number = document.getElementById('number');
const desc = document.getElementById('desc');

clickBtn.addEventListener('click', () => {
    let numberCount = parseInt(number.innerHTML);

    numberCount++;
    number.innerHTML = numberCount;

    switch (numberCount) {
        case 10:
            desc.innerHTML = 'You have clicked 10 times already.'
            break
        case 100:
            desc.innerHTML = 'Great! You have clicked 100 times already.'
            break
        case 200:
            desc.innerHTML = 'Excellent! You have clicked 200 times already.'
            break
    }

    console.log(number.innerHTML);
});