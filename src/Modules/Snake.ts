class Snake {
    head: HTMLElement;
    bodies: HTMLCollectionOf<HTMLElement>;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if (this.X === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('Game over');
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('Game over');
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let preBodyItemX = this.bodies[i - 1].offsetLeft;
            let preBodyItemY = this.bodies[i - 1].offsetTop;
            this.bodies[i].style.left = preBodyItemX + "px";
            this.bodies[i].style.top = preBodyItemY + "px";
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {
                throw new Error("Game Over.")
            }
        }
    }
}
export default Snake;