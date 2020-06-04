class Board {
    constructor () {
        this.gameTable = document.querySelector('.game');
    }

    init (settingsGame,game) {
        this.settingsGame = settingsGame;
        this.game = game;
        this.drawGameTable();//Отрисовываем поле
        this.eventListenerTd(); //Добавляем клики
    }

    /**
     * Отрисовка игрового поля
     */
    drawGameTable () {
        for (let row = 0; row < 3; row ++) {
            let tr = document.createElement('tr');
            this.gameTable.appendChild(tr);
            for (let col = 0; col < 3; col ++) {
                let td = document.createElement('td');
                td.dataset.row = row;
                td.dataset.col = col;
                tr.appendChild(td);
            }
        }
    }

    /**
     * Добавление события при клике на TD поля
     */
    eventListenerTd() {
        this.gameTable.querySelectorAll('td').forEach (el => el.addEventListener('click', event => this.game.clickHandlerTd(event)));
    }

    /**
     * Заполнение ячейки при клике на нее
     * @param {eventMouse} event 
     */
    fillTd (event) {
        let row = event.target.dataset.row;
        let col = event.target.dataset.col;

        this.settingsGame.map[row][col] = this.settingsGame.phase;
        event.target.textContent = this.settingsGame.phase;
    }

    /**
     * Проверка поля на которое кликнули, пустое ли оно
     * @param {eventMouse} event 
     */
    emptyTd (event) {
        let row = event.target.dataset.row;
        let col = event.target.dataset.col;
        return this.settingsGame.map[row][col] === '';
    }
}