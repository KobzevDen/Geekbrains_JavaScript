class Game {
    constructor() {
        this.tickIdentifier = null;
        this.ElMessage = document.getElementById('message');
    }
    /**
     * 
     * @param {*} settings 
     * @param {*} status 
     * @param {*} board 
     * @param {*} snake 
     * @param {*} menu 
     * @param {*} food 
     * @param {*} count 
     */
    init(settings,status,board,snake,menu,food,count) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
        this.count = count;
    }
    /**
     * Запуск игры
     */
    run () {
        this.menu.addListenerBtn(this.start.bind(this),this.pause.bind(this));
        document.addEventListener('keydown',this.pressKeyHandler.bind(this));
        this.count.setCountWin ();
    }
    /**
     * Старт игры
     */
    start () {
        if (this.status.isPaused()) {
            this.status.setPlaying ();
            this.tickIdentifier = setInterval(this.doTick.bind(this),1000/this.settings.speed);
        }
    }
    /**
     * Пауза игры
     */
    pause () {
        if (this.status.isPlaying ()) {
            this.status.setPaused ();
            clearInterval(this.tickIdentifier);
        }
    }
    /**
     * Шаг игры
     */
    doTick () {
        this.snake.performStep ();//меняем положение змейки
        this.count.setCountCurrent (this.snake.body.length);
        if (this.isGameLost()) {
            return;
        }
        if (this.snakeEatItSelf ()) {
            return;
        }
        if (this.isGameWon ()) {
            return;
        }
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        }
        this.board.clearBoard (); //очищаем поле игровое
        this.food.setFood();
        this.board.renderSnake();
    }

    /**
     * Установка режима движения змейки при смене движения
     * @param {} event - событие 
     */
    pressKeyHandler (event) {
        switch (event.key) {
            case 'ArrowUp':
                this.snake.changeDirection ('up');
                break;
            case 'ArrowDown':
                this.snake.changeDirection ('down');
                break;
            case 'ArrowLeft':
                this.snake.changeDirection ('left');
                break;
            case 'ArrowRight':
                this.snake.changeDirection ('right');
                break;
        }

    }
    /**
     * Игра проиграна
     */
    isGameLost () {
        if (this.board.isNextStepToWall(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage ('Вы проиграли');
            return true;
        }
        return false;
    }
    /**
     * Игра выйграна
     */
    isGameWon () {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage ('Вы выйграли');
            return true;
        }
    }
    /**
     * Установка текста сообщения
     * @param {string} text - текст сообщения
     */
    setMessage (text) {
        this.ElMessage.innerText = text;
    }

    /**
     * Змейка съела сама себя
     */
    snakeEatItSelf () {
        let headSnake = this.snake.body[0]; //Берем первый элемент
        for (let el = 1 /*Все кроме первого*/; el < this.snake.body.length; el ++) {
            if (this.snake.body[el].x == headSnake.x && this.snake.body[el].y == headSnake.y) {
                clearInterval(this.tickIdentifier);
                this.setMessage ('Вы проиграли');
                return true;
            }
        }
        return false;
      }
}