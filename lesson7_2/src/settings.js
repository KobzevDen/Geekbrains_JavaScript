class Settings {
    constructor () {
        this.phase =  'X';
        this.map = [['','',''], ['','',''],['','','']];
        this.status = 'playing';
    }

    /**
     * Смена крестиков и ноликов
     */
    changePhase () {
        this.phase = this.phase == 'X' ? '0' : 'X';
    }

    /**
     * Смена статуса игры
     */
    changeStatus () {
        this.status = 'stopped';
    }

    /**
     * Проверка играем ли мы
     */
    isPlaying()  {
        return this.status === 'playing';
    }

    /**
     * Проверка заполнены ли все поля игрового поля
     */
    isfullMap () {
        for (let tr = 0; tr < this.map.length; tr++) {
            for (let td = 0; td < this.map[tr].length; td++) {
                if (this.map[tr][td] === '') {
                    return false;
                }
            }
        }
        return true;
    }
}