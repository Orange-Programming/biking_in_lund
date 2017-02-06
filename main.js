var cc;
var c;

var biker_object;

var rightPressed = false;
var leftPressed = false;


window.onload=function() {
	c = document.getElementById('gc');
	cc = c.getContext('2d');

	biker_object = new Biker(c);


	setInterval(update, 1000/30);

	function keyDownHandler(event) {
		if(event.keyCode == 39) {
			rightPressed = true;
		}
		else if(event.keyCode == 37) {
			leftPressed = true;
		}
	}

	function keyUpHandler(event) {
		if(event.keyCode == 39) {
			rightPressed = false;
		}
		else if(event.keyCode == 37) {
			leftPressed = false;
		}
	}

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);


}

function update() {
	biker_object.update(rightPressed, leftPressed);
	draw();
}


function draw() {
	cc.fillStyle = 'black';
	cc.fillRect(0, 0, c.width, c.height);
	biker_object.draw();
}