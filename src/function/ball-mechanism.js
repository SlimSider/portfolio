import Ball from './ball'

var gravity = 0.5;
var bounce = 0.7;
var xFriction = 0.15;

export const init = canvas => {
    let container;
    console.log(canvas)
    const ctx = canvas.getContext("2d");
    const balls = [];
    balls.push(new Ball(100, 10, 0, -10, 20, null));
    balls.push(new Ball(20, 10, 0, -10, 20, null));
    balls.push(new Ball(100, 100, 0, -10, 20, null));
    draw(canvas, ctx, balls);
}

const draw = (canvas, ctx, balls) => {

    //draw cirlce
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false)
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.closePath();

            ballMovement(canvas, ball);
        })
        collisionBall(balls)
    }, 1000 / 35)
}

const ballMovement = (canvas, ball) => {
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += gravity;

    //If either wall is hit, change direction on x axis
    if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
        ball.vx *= -1;
    }

    // Ball hits the floor
    if (ball.y + ball.r > canvas.height) {// ||

        console.log(ball)
        // Re-positioning on the base
        ball.y = canvas.height - ball.r;
        //bounce the ball
        ball.vy *= -bounce;
        //do this otherwise, ball never stops bouncing
        if (ball.vy < 1.1 && ball.vy > -2.1)
            ball.vy = 0;
        //do this otherwise ball never stops on xaxis
        if (Math.abs(ball.vx) < 1.1)
            ball.vx = 0;
    }

    if (ball.vx > 0)
        ball.vx = ball.vx - xFriction;
    if (ball.vx < 0)
        ball.vx = ball.vx + xFriction;
}

const setupCanvas = () => {
    // container = document.createElement('div');
    // container.className = "container";

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // document.body.appendChild(container);
    // container.appendChild(canvas);

    // ctx.strokeStyle = "#ffffff";
    // ctx.lineWidth = 2;
}

function collisionBall(balls){
	for(var i = 0; i < balls.length - 1; i++){
		var b1 = balls[i];
        for(var j = i + 1; j < balls.length; j++){
            var b2 = balls[i];
		if(b1.x != b2.x && b1.y != b2.y){
			//quick check for potential collisions using AABBs
			if(b1.x + b1.r + b2.r > b2.x
				&& b1.x < b2.x + b1.r + b2.r
				&& b1.y + b1.r + b2.r > b2.y
				&& b1.y < b2.y + b1.r + b2.r){
				
				//pythagoras 
				var distX = b1.x - b2.x;
				var distY = b1.y - b2.y;
				var d = Math.sqrt((distX) * (distX) + (distY) * (distY));
	
				//checking circle vs circle collision 
				if(d < b1.r + b2.r){
					var nx = (b2.x - b1.x) / d;
					var ny = (b2.y - b1.y) / d;

					// calulating the point of collision 
					var colPointX = ((b1.x * b2.r) + (b2.x * b1.r)) / (b1.r + b2.r);
					var colPointY = ((b1.y * b2.r) + (b2.y * b1.r)) / (b1.r + b2.r);
					
					//stoping overlap 
					b1.x = colPointX + b1.r * (b1.x - b2.x) / d;
					b1.y = colPointY + b1.r * (b1.y - b2.y) / d;
					b2.x = colPointX + b2.r * (b2.x - b1.x) / d;
					b2.y = colPointY + b2.r * (b2.y - b1.y) / d;

					//updating velocity to reflect collision 
					b1.vx -= nx;
					b1.vy -= ny;
					b2.vx += nx;
					b2.vy += ny;
				}
			}
		}
	}
}}