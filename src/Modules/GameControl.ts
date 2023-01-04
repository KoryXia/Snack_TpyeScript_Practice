import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel'


class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    isEnd: boolean = true;
    direction: String = "";
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        document.addEventListener("keydown", (event) => {
            if (event.key.match("Arrow") != null) {
                do {
                    if (this.direction === "ArrowUp" && event.key === "ArrowDown")
                        break;
                    if (this.direction === "ArrowDown" && event.key === "ArrowUp")
                        break;
                    if (this.direction === "ArrowLeft" && event.key === "ArrowRight")
                        break;
                    if (this.direction === "ArrowRight" && event.key === "ArrowLeft")
                        break;
                    this.direction = event.key;
                } while (false);
            }

        });
        this.move();
    }

    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        this.eat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            this.isEnd = false;
            alert("Game Over.");
            window.location.reload(); 
        }

        let time = 300 - (this, ScorePanel.level.value - 1) * 30;
        this.isEnd ? setTimeout(() => this.move(), time > 10 ? time : 10) : null;
    }

    eat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.changePosition();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl;