window.addEventListener('load',function () {
    let board = new Board();
    let game = new Game();
    let settings = new Settings();

    board.init(settings,game);
    game.init(settings,board);
});