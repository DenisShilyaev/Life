const FIELD_SIZE = 50; //Размер поля
const ROWS_NUMBER = 10; //Количество строк
const COLUMNS_NUMBER = 10; //Количество столбцов
const BACKGROUND_COLOR = 'gray'; //Цвет фона
const FIELD_COLOR = 'blue'; //Цвет жизни


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


const start = () => {
    canvas.width = FIELD_SIZE * COLUMNS_NUMBER //Задаем ширину canvas
    canvas.height = FIELD_SIZE * ROWS_NUMBER //Задаем высоту canvas
    clearCanvas();
}

const clearCanvas = () => {
    context.fillStyle = BACKGROUND_COLOR; //Задаем цвет
    context.beginPath();  
    context.rect(0, 0, canvas.width, canvas.height); //Отрисовываем квадрат
    context.fill(); //Квадрат закрашенный
}

start();

