// меняю цвет первой карточки

const ProductCard = document.querySelector('.card');
const changeColorCardButton = document.querySelector('.one-card-color-change');
const googleURL = 'https://google.com'
const blueColorHesh = '#0da0e4'
const brownColorHesh = '#703737'


changeColorCardButton.addEventListener('click' , () => {
    ProductCard.style.backgroundColor = blueColorHesh
})

// меняю цвет всех карточек

const ProductCards = document.querySelectorAll('.card');
const changeAllColorCardButton = document.querySelector('.all-card-color-change');

changeAllColorCardButton.addEventListener('click' , () => {
    ProductCards.forEach((card) => card.style.backgroundColor = brownColorHesh)
})

// открываю google.com

const openGooglePage = document.querySelector('.open-google-page');
openGooglePage.addEventListener('click', openGoogle)

// добавил функцию вопроса перед переходом по ссылке

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть google.com?')
        if (answer === true) {
        window.open('https://google.com')
    } else {
        return;
    }
}

// функция console.log и alert

const outputLogButton = document.querySelector('.output-console-log');
outputLogButton.addEventListener ('click',() => outputConsoleLog ('ДЗ№6'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// вывел заголовок в консоль

const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseover' , () => {
    
console.log (mainTitle.textContent);
})  

// кнопка меняет цвет при нажатии на нее

const colorChangeBotton = document.querySelector('.multi-color-button');

colorChangeBotton.addEventListener('click', function () {
    
    if (colorChangeBotton.classList.contains('active-color')) {
        colorChangeBotton.classList.remove('active-color'); 
    } else {
        colorChangeBotton.classList.add('active-color');    
    }
})
