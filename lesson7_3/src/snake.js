class Snake {

  constructor() {
    this.possibleDirections = ["down", "up", "left", "right"];
    this.body = [{ x: 1, y: 1 }];
    this.direction = "down";
  }
  /**
   * Шаг змейки 
   */
  performStep () {
    let currentHeadCoords = this.body[0];
    let newHeadCoords= {x: this.body[0].x, y: this.body[0].y};

    switch(this.direction) {
        case 'down':
            newHeadCoords.y++;
            break;
        case 'up':
            newHeadCoords.y--;
            break;
        case 'left':
            newHeadCoords.x--;
            break;
        case 'right':
            newHeadCoords.x++;
            break
    }

    this.body.unshift(newHeadCoords);
    this.body.pop()
  }

  /**
   * Изменение направления змейки
   * @param {string} newDirection - направление
   */
  changeDirection (newDirection) { 
    if (!this.possibleDirections.includes(newDirection)) {
        throw new Error ('Передано неверное направление');
    }
    if (this.isPassedOppositeDirection(newDirection)) {
        return;
    }
    this.direction = newDirection;
  }

  /**
   * Проверка корректности направления змейки
   * @param {string} newDirection - направление
   */
  isPassedOppositeDirection (newDirection) {
    if (this.direction == 'down' && newDirection == 'up') {
        return true;
    }
    if (this.direction == 'up' && newDirection == 'down') {
        return true;
    }
    if (this.direction == 'left' && newDirection == 'right') {
        return true;
    }
    if (this.direction == 'right' && newDirection == 'left') {
        return true;
    }
    return false;
  }

  /**
   * Увеличение змейки в случае если наткнулись на еду
   */
  increaseBody () {
      let bodyLastCell = this.body[this.body.length-1];
      let newBodyLastCell = {
          x: bodyLastCell.x,
          y: bodyLastCell.y
      }
      this.body.push(newBodyLastCell);
  }

}
