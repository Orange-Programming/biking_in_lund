var cc;
var c;

var biker_object;
var objects = [];

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var score = 0;

var frame_counter = 0;

var boundary_margin = 20;


window.onload=function() {
	c = document.getElementById('gc');
	cc = c.getContext('2d');

	background.loadLevel("level2", cc);

	biker_object = new Biker(c);
	objects.push(biker_object);
	//objects.push(new Obstacle(c, 300, 300));

	setInterval(update, 1000/30);

	function keyDownHandler(event) {
		if(event.keyCode == 40) {
			upPressed = true;
		}
		if(event.keyCode == 39) {
			rightPressed = true;
		}
		if(event.keyCode == 37) {
			leftPressed = true;
		}
		if(event.keyCode == 38) {
			downPressed = true;
		}
	}

	function keyUpHandler(event) {
		if(event.keyCode == 39) {
			rightPressed = false;
		}
		if(event.keyCode == 37) {
			leftPressed = false;
		}
		if(event.keyCode == 40) {
			upPressed = false;
		}
		if(event.keyCode == 38) {
			downPressed = false;
		}
	}

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
}

function update() {

	frame_counter++;
	if (frame_counter % 30 === 0){
		for (var i = 0; i < 1; i++){
	       var x_position = Math.random()*(c.width-50);
	       var y_position = c.height;
	       objects.push(new Obstacle(c, x_position, y_position));
	   }
	}
	if (frame_counter % 37 === 0){
	    for (var i = 0; i < 1; i++){
	        var x_position = Math.random()*(c.width-50);
	        var y_position = c.height;
	        x_position = Math.random()*(c.width-50);
	        objects.push(new Walker(c, x_position, y_position))
	    }
	}


	biker_object.update(rightPressed, leftPressed, upPressed, downPressed);



	for (var i = 0; i < objects.length; i++){
		//console.log("i: " + i);
		var current_object = objects[i];
		if (current_object !== biker_object){
			current_object.update();
			if (current_object.y_position < 0 - current_object.diameter){
				objects.splice(i, 1);
				i--;
			}
		}

    }
    //console.log("length: " + objects.length);
    if (collision()){
    	if (collision() === 'biker') {
    		//console.log('end game');
    		//alert('you lost')
    		biker_object.is_hit();
    	}
    	else {
    		console.log('change path');
    	}
	}
	draw();
	score += 0.3

}

// treats objects as perfect rectangles
function collision(){

	for (var i = 0; i < objects.length; i++){
		var object1 = objects[i];
		for(var j = i+1; j < objects.length; j++){
			var object2 = objects[j];

			//console.log(objects[i].width, objects[j].width);
			if (object1.x_position + object1.width >= object2.x_position
				&& object1.x_position < object2.x_position + object2.width
				&& object1.y_position + object1.height >= object2.y_position
				&& object1.y_position < object2.y_position + object2.height){
				if (object1 == biker_object || object2 == biker_object) {
					return 'biker';
				}
				else {
					return 'not biker';
				}
			}
		}
	}
	return false;
}

function draw() {
	cc.fillStyle = 'black';
    background.drawLevel(cc);
	// cc.fillRect(0, 0, c.width, c.height);
	biker_object.draw();
	for (var i = 0; i < objects.length; i++){
        objects[i].draw();
    }
    drawScore();
}


function drawScore() {
	cc.font = "22px Arial";
	cc.fillStyle = "yellow";
	cc.fillText('SCORE: ' + Math.floor(score), c.width-200, 50);
}
