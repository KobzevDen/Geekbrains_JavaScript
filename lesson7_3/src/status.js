class Status {

    constructor () {
        this.setPaused();
    }
    /**
     * Установка паузы
     */
    setPaused () {
        this.condition = 'paused';
    }
    /**
     * Установка режима игры
     */
    setPlaying () {
        this.condition = 'playing';
    }
    /**
     * Сейчас паузв?
     */
    isPaused () {
        return this.condition === 'paused';
    }
    /**
     * Сейчас игра?
     */
    isPlaying () {
        return this.condition === 'playing';
    }
}