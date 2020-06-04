class Count {
    constructor() {
        this.countCurrentEl = document.querySelector('.countCurrent');
        this.countWinEl = document.querySelector('.countWin');
    }
    /**
     * Инициализация счетчика
     * @param {object} settings - настройки
     */
    init(settings) {
        this.settings = settings;
    }

    /**
     * Сколько змейка уже скушала
     * @param {number} countArr 
     */
    setCountCurrent (countArr) {
        this.countCurrentEl.innerText = countArr;
    }

    /**
     * Количество еды которое змейка должна съесть (исходя из настроек)
     */
    setCountWin () {
        this.countWinEl.innerText = this.settings.winLength;
    }
}