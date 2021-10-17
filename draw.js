const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const score = document.querySelector("#score");

var snake, fruit;


(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();


    let blink = 0;
    window.setInterval(() => {
        blink++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(blink < 8){
            fruit.draw();
        }
        if(blink >= 10) {
            blink = 0;
        }
        snake.update();
        snake.draw();
        score.innerHTML = snake.total;

        if(snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 60)
}());

window.addEventListener('keydown', (evt) => {
    const direction = evt.key.replace('Arrow', '');
    // console.log(direction);
    snake.changeDirection(direction);
})