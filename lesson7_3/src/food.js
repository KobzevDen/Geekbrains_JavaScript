class Food {
    constructor() {
        this.x = null;
        this.y = null;
    }

    /**
     * Инициализация еды
     * @param {object} settings - настройки
     * @param {object} snake - змейка
     * @param {object} board - игровое поле
     */
    init (settings,snake,board) {
        this.settings = settings;
        this.snake = snake;
        this.board = board;
    }

    /**
     * Получение новой еды на игровом поле
     */
    setNewFood() {
        let food = this.generateRandomCoords();
        this.board.renderFood(food);
    }

    /**
     * Получение новых координат еды 
     * @returns {object} - возвращается обхект еды с координатами x и y
     */
    generateRandomCoords() {
        while(true) {
            this.x = Math.floor(Math.random() * this.settings.colCount) + 1;
            this.y = Math.floor(Math.random() * this.settings.rowCount) + 1;

            let El = this.board.getCellEl(this.x,this.y);

            if (El.classList.contains('snakeBody')) {
                continue;
            }
            return this;
        }
        

        
    }

    setFood () {
        this.board.renderFood (this);
    }
}