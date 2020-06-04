class Settings {

    /**
     * Инициализация настроек
     * @param {object} params  - параметры которые задал пользователь в начале игры
     */
    init (params) {
        let defaultParams = {rowCount:21, colCount:21, speed: 10, winLength:10};
        Object.assign(defaultParams,params);

        if (defaultParams.rowCount < 10 || defaultParams.colCount > 30) {
            throw new Error('Неверные настройки, значение rowCount должно быть в диапазоне 10 и 30 включительно');
        }

        this.rowCount = defaultParams.rowCount;
        
        if (defaultParams.colCount < 10 || defaultParams.colCount > 30 ) {
            throw new Error('Неверные настройки, значение colCount должно быть в диапазоне 10 и 30 включительно');
        }

        this.colCount = defaultParams.colCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error('Неверные настройки, значение speed должно быть в диапазоне 1 и 10 включительно')
        }

        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
            throw new Error('Неверные настройки, значение winLength должно быть в диапазоне 5 и 50 включительно');
        }

        this.winLength = defaultParams.winLength;

    } 
}