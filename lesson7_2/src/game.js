class Game  {

    init (settingsGame,boardGame) {
        this.settingsGame = settingsGame;
        this.boardGame = boardGame;
    }
    /**
     * Обработка клика по ячейки
     * Проверка корректный ли клик
     * Проставление крестика или нолика в ячейке
     * Проверка, есть ли выйгрышная комбинация
     * Проверка на окончание игры 
     * @param {eventMouse} event 
     */
    clickHandlerTd(event) {
        if (!this.isCorrectClick(event)) {//Проверяем пустая ли ячейка и играем ли мы вообще
            return;
        }
        this.boardGame.fillTd(event); //Проставляем значение в ячейку
        if (this.hasWon())  { //Проверяем выграли ли мы
            this.backlightWon (this.lineWon);//Подсвечиваем выйгрышные поля
            this.settingsGame.changeStatus();//Останавливаем игру
            this.sayWon();//объявляем победителя
        } 
        if (this.settingsGame.isfullMap() && this.settingsGame.isPlaying()) {
            this.settingsGame.changeStatus();//Останавливаем игру
            this.sayNoWinner();
        }
        this.settingsGame.changePhase();

    }

    /**
     * Проверка корректный ли клик
     * проверяется нет ли в поле уже крестика или нолика
     * проверяется играем мы сейчас или нет
     * @param {eventMouse} event 
     */
    isCorrectClick(event) {
        return this.boardGame.emptyTd(event) && this.settingsGame.isPlaying();
    }

    /**
     * Проверка выграли ли мы, перечислены все 8 комбинаций
     */
    hasWon () {
        return  this.isLineWon({x:0,y:0},{x:1,y:0},{x:2,y:0})||
                this.isLineWon({x:0,y:1},{x:1,y:1},{x:2,y:1})||
                this.isLineWon({x:0,y:2},{x:1,y:2},{x:2,y:2})||
                this.isLineWon({x:0,y:0},{x:0,y:1},{x:0,y:2})||
                this.isLineWon({x:1,y:0},{x:1,y:1},{x:1,y:2})||
                this.isLineWon({x:2,y:0},{x:2,y:1},{x:2,y:2})||
                this.isLineWon({x:0,y:2},{x:1,y:1},{x:2,y:0})||
                this.isLineWon({x:0,y:0},{x:1,y:1},{x:2,y:2});
    }

    /**
     * Проверка сыграла ли линия
     * @param {object} a 
     * @param {object} b 
     * @param {object} c 
     */
    isLineWon(a,b,c) {
        let result = this.settingsGame.map[a.y][a.x] + this.settingsGame.map[b.y][b.x] + this.settingsGame.map[c.y][c.x];
        if (result === 'XXX' || result === '000') {
            this.lineWon = [...arguments];
            return true;
        } else  {
            return false;
        }
    }

    /**
     * Сообщение о том кто выйграл
     */
    sayWon () {
        alert(`${this.settingsGame.phase === 'X' ? 'Крестики' : 'Нолики'} выйграли`);
    }

    /**
     * Сообщение о том что никто не выйграл
     */
    sayNoWinner () {
        alert('Победителя нет');
    }

    /**
     * Подсветка выйгрышной линии
     * @param {Array} lineWonGame 
     */
    backlightWon (lineWonGame) {
        lineWonGame.forEach(el => document.querySelector(`[data-row="${el.y}"][data-col="${el.x}"]`).style.background = 'red');
    }
}