class Menu {
    constructor() {
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
    }
    /**
     * Установка событий на кнопки 
     * @param {function} startHandler 
     * @param {function} pauseHandler 
     */
    addListenerBtn (startHandler, pauseHandler) {
        this.startBtn.addEventListener('click',startHandler);
        this.pauseBtn.addEventListener('click',pauseHandler);
    }
}