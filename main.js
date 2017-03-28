var cc;
var c;

var biker_object;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var restart = false;

var objects;
var score;
var frame_counter;
var boundary_margin;
var background_speed;

var default_people_creation_speed = 38;
var people_creation_speed = default_people_creation_speed;


window.onload = function() {

	c = document.getElementById('gc');
	cc = c.getContext('2d');

	add_key_listeners();
	initialize_game();

	setInterval(update, 1000/30);
};


function add_key_listeners() {
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
        if(event.keyCode == 88) {
            initialize_game();
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


function initialize_game() {
    score = 0;
    frame_counter = 0;
    boundary_margin = 20;
    background_speed = 10;
    objects = [];
    people_creation_speed = parseInt(people_creation_speed / 2);
    console.log(people_creation_speed);

    background.loadLevel("level2", objects);

    biker_object = new Biker(c);
    objects.push(biker_object);
}



function update() {

	frame_counter++;

	biker_object.update(rightPressed, leftPressed, upPressed, downPressed);
	background.updateLevel(objects);

	updateRandomPersonSpawn(frame_counter);

	for (var i = 0; i < objects.length; i++){
		var current_object = objects[i];
		if (current_object !== biker_object){
			current_object.update();
			if (current_object.y_position < 0 - current_object.diameter){
				objects.splice(i, 1);
				i--;
			}
		}

    }

    var check_collision = collision();
    if (check_collision){
    	if (check_collision === 'biker') {
    		biker_object.is_hit();
    	}
	}

	draw();


	if (biker_object.is_alive == false) {
		cc.font = "100px BadaBoom-BB";
		cc.fillStyle = "yellow";
		cc.fillText('GAME OVER!', 200, 250);
		cc.fillText('SCORE: ' + Math.floor(score), 230, 400);
		cc.font = "35px BadaBoom-BB";
		cc.fillText('PRESS X TO START OVER', 280, 550);
		if (restart) {
			// REINITIALIZE EVERYTHING TO START OVER
		}

	}
	else {
		score += 0.3;
	}

}


function updateRandomPersonSpawn(frame_counter) {
    if (frame_counter % people_creation_speed === 0){
        for (var i = 0; i < 1; i++){
            var x_position = Math.random()*(c.width-50);
            var y_position = c.height;
            x_position = Math.random()*(c.width-50);
            objects.push(new Walker(c, x_position, y_position))
        }
    }
}


function updateRandomTreeSpawn(frame_counter) {
    if (frame_counter % 30 === 0){
        for (var i = 0; i < 1; i++){
            var x_position = Math.random()*(c.width-50);
            var y_position = c.height;
            objects.push(new Tree(c, x_position, y_position));
        }
    }
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
	cc.font = "32px BadaBoom-BB";
	cc.fillStyle = "yellow";
	cc.fillText('SCORE: ' + Math.floor(score), c.width-200, 50);
}
