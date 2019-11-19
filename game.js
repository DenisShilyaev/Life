const FIELD_SIZE = 5; //Размер ячейки
const ROWS_NUMBER = 100; //Количество строк
const COLUMNS_NUMBER = 100; //Количество столбцов
const BACKGROUND_COLOR = 'gray'; //Цвет фона
const FIELD_COLOR = 'blue'; //Цвет жизни
const GENERATION_TIME = 100; //Время, через которое будет производится итерация обновления жизни


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const lifeGame = new LifeGame(ROWS_NUMBER, COLUMNS_NUMBER);

const start = () => {
    canvas.width = FIELD_SIZE * COLUMNS_NUMBER //Задаем ширину canvas
    canvas.height = FIELD_SIZE * ROWS_NUMBER //Задаем высоту canvas

    lifeGame.reviveRandomFields(ROWS_NUMBER * COLUMNS_NUMBER / 2);

    requestAnimationFrame(tick);
}

const tick = (timestamp) => { //Функция обновляет экран
    clearCanvas(); //Очищаем поле

    if (timestamp > lifeGame.generationNumber * GENERATION_TIME) {//Сменяем поколение через определенное время
        lifeGame.changeGeneration();
    }

    lifeGame.forFreeEach((x, y) => drawField(x, y, FIELD_COLOR)); //Отрисовываем живые клетки

    requestAnimationFrame(tick); //Зацикливаем функцию
}

const clearCanvas = () => { //Очищаем поле
    context.fillStyle = BACKGROUND_COLOR; //Задаем цвет
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height); //Отрисовываем квадрат
    context.fill();
}

const drawField = (x, y, color) => { //Отрисовываем ячейку
    context.fillStyle = color
    context.beginPath()
    context.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
    context.fill()
}

start();