function cityTemp(x, y) {
    console.log(`Сейчас в городе ${x} температура ${y} градусов`);
}

cityTemp("Бишкек", 35);


function checkLightSpeed(speed) {
    if (speed > 299792458) {
        console.log("Сверхсветовая скорость");
    } else if (speed === 299792458) {
        console.log("Световая скорость");
    } else {
        console.log("Подсветовая скорость");
    }
}

checkLightSpeed(299792458);

const item = "Автомобиль";

const itemPrice = 10000;

function buyItem(budget) {
    if (budget >= itemPrice) {
        console.log(`Ваш  ${item} приобретен за ${itemPrice} долларов. Спасибо за покупку!`);
    } else {
        const difference = itemPrice - budget;
        console.log(`Вам не хватает ${difference}, чтобы купить ${item}`);
    }
}

buyItem(10000);
buyItem(5000);