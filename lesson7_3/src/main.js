window.addEventListener('load',() => {
    let settings = new Settings();
    let status = new Status();
    let snake = new Snake();
    let board = new Board();
    let menu = new Menu();
    let food = new Food();
    let count = new Count();
    let game = new Game();

    settings.init({speed: 5, winLength: 15});//Инициализируем настройки

    board.init(settings,snake);
    board.renderBoard();//Отрисовываем игровое поле
    board.renderSnake();//Отрисовываем змейку

    food.init(settings,snake,board);
    food.setNewFood();

    count.init(settings);

    game.init(settings,status,board,snake,menu,food,count);
    game.run();
    
});