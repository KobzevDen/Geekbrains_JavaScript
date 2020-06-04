class Board {
    constructor () {
        this.boardEl = document.getElementById('game');
    }

    /**
     * Инициализация игрового поля
     * @param {object} settings - настройки
     * @param {object} snake - змейка
     */
    init (settings,snake) {
        this.settings = settings;
        this.snake = snake;
    }

    /**
     * Отрисовка игрового поля
     */
    renderBoard () {
        for (let row = 0; row < this.settings.rowCount; row ++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colCount; col ++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }

    /**
     * Отрисовка змейки
     */
    renderSnake() {
        let SnakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        if (SnakeBodyElems.length > 0) {
            SnakeBodyElems.forEach(el => {
                el.classList.add('snakeBody');
            });
        }
    }

    /**
     * Получение элементов змейки
     * @param {Array} coords 
     * @returns {Array} - получаем массив элементов змейки
     */
    getSnakeBodyElems (coords) {
        if (coords.length > 0) {
            let cellElems = [];
            for (let val of coords) {
                let cellElem = this.getCellEl(val.x,val.y);
                cellElems.push(cellElem);
            }
            return cellElems;
        }
        return null;
    }

    /**
     * Получение элемента поля по координатам
     * @param {number} x 
     * @param {number} y 
     */
    getCellEl (x,y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    /**
     * Отрисовывается еда
     * @param {Oblect} food  - Объект еда с координами x и y
     */
    renderFood (food) {
        let ElFood = this.getCellEl(food.x,food.y);
        ElFood.classList.add('food');
    }

    /**
     * Очистка игрового поля
     */
    clearBoard () {
        document.querySelectorAll('td').forEach(el => {
            el.className = '';
        });
    }

    /**
     * Получение елемента на игровом поле когда еда становится змейккой
     */
    isHeadOnFood () {
        return this.boardEl.querySelector('.food').classList.contains('snakeBody');
    }

    /**
     * Получение слудеющего шага
     * @param {object} nextCellCoords 
     */
    isNextStepToWall (nextCellCoords) {
        let nextCell = this.getCellEl(nextCellCoords.x,nextCellCoords.y);
        return nextCell === null;
    }
}