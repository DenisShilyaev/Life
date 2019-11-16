class Lifegame {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.map = [];
        
        for (let y = 0; y < this.rows; y++) { //Заполяем матрицу
            const row = [];

            for (let x = 0; x < this.columns; x++) {
                row.push(false);
            }

            this.map.push(row);
        }

        getField(x, y) {
            if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
                return false
            }
            return this.map[y][x];
        };

        setField(x, y, value) {
            if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
                return value
            }
            return this.map[y][x] = value;
        };
    }
}