class LifeGame {
    constructor(rows, columns) {
        this.rows = rows; //Строки
        this.columns = columns; //Столбцы

        this.map = []; //Создаем матрицу

        for (let y = 0; y < this.rows; y++) { //Заполяем матрицу ячейками со значением false
            const row = [];

            for (let x = 0; x < this.columns; x++) {
                row.push(false);
            }

            this.map.push(row);
        }
    }

    reviveRandomFields(n = 1) {
        const freeFields = []; //Создаем новый массив для пустых (свободных) ячеек

        for (let y = 0; y < this.rows; y++) { //Заполняем данный массив 
            for (let x = 0; x < this.columns; x++) {
                if (this.getField(x, y) === false) {
                    freeFields.push({ x, y });
                }
            }
        }

        n = parseInt(n); //Проверяем n
        n = Math.min(n, freeFields.length); //Проверяем, что бы n не выходила за пределы массива

        while (n-- > 0) {
            const index = Math.floor(Math.random() * freeFields.length) //Записываем координаты случайной ячейки поля
            const { x, y } = freeFields.splice(index, 1)[0] //"Изымаем"" данную ячейку из поля
            this.setField(x, y, true) //Записываем в данную ячейку true
        }
    };

    forFreeEach(hander) {
        for (let y = 0; y < this.rows; y++) {//Перебираем всё поле
            for (let x = 0; x < this.columns; x++) {
                if (this.getField(x, y) === true) { //Если ячейка содержит true (то есть она живая)
                    hander(x, y); //Вызываем hander с данными координатами
                }
            }
        }
    }

    getField(x, y) { //Геттерн
        if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
            return false
        }
        return this.map[y][x];
    };

    setField(x, y, value) { //Сеттерн
        if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
            return value
        }
        return this.map[y][x] = value;
    };
}