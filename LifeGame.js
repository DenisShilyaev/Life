class LifeGame {
    constructor(rows, columns) {
        this.rows = rows; //Строки
        this.columns = columns; //Столбцы
        this.generationNumber = 0; //Количество поколений, которое уже прошло

        this.map = []; //Создаем матрицу

        for (let y = 0; y < this.rows; y++) { //Заполяем матрицу ячейками со значением false
            const row = [];

            for (let x = 0; x < this.columns; x++) {
                row.push(false);
            }

            this.map.push(row);
        }
    }

    changeGeneration() { //Генератор жизни. Создаем новое поле со следующей итерацией жизни.
        const map = []

        for (let y = 0; y < this.rows; y++) {
            const row = []

            for (let x = 0; x < this.columns; x++) {
                let neighborsNumber = 0;
                let state = false; //Состояние клетки (true - живая, false - мёртвая)

                for (let dx = -1; dx <= 1; dx++) { //Ниже пробегаемся по соседним клеткам и считаем количество живых соседей
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0) { //Не учитываем саму летку. То сть сама клетка не может являтся себе соседом.
                            continue
                        }

                        neighborsNumber += this.getField(x + dx, y + dy) //Записываем количество живых соседей
                    }
                }

                if (this.getField(x, y) === true) { //Жизнь сохраняется если рядом находятся 2 или 3 живые клетки
                    if (neighborsNumber === 2 || neighborsNumber === 3) {
                        state = true
                    }
                } else {
                    if (neighborsNumber === 3) { //Жизнь появляется в новой клетке если рядом находятся 3 живых соседа
                        state = true
                    }
                }

                row.push(state) //"Оживляем" или "убиваем" клетку
            }

            map.push(row)
        }

        this.map = map
        this.generationNumber++
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
        for (let y = 0; y < this.rows; y++) { //Перебираем всё игровое поле
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