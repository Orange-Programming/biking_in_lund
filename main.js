var cc;
var c;

var music_source = 'static/music/uncle_marthas_will.mp3';
var music_object = new Audio(music_source);

var biker_object;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var resetPressed = false;
var restart = false;

var objects;
var score;
var frame_counter;
var boundary_margin;
var background_speed;
var offRoadSpeed;
var onRoadSpeed;

var level_wins = 0;

var default_people_creation_speed = 38;
var people_creation_speed = default_people_creation_speed;


var endOfLevel = false;


window.onload = function() {

	c = document.getElementById('gc');
	cc = c.getContext('2d');

	add_key_listeners();
	initialize_game();

    music_object.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    music_object.play();

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
            resetPressed = true;
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
        if (event.keyCode == 88) {
            resetPressed = false;
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
    onRoadSpeed = 20;
    offRoadSpeed = 1;
    upPressed = false;
    objects = [];
    level_wins = 0;
//    console.log(people_creation_speed);
    people_creation_speed = default_people_creation_speed;

    biker_object = new Biker(c);

    background.loadLevel("level2", objects);
}


function win_reset_level() {

    background.loadLevel("level2", objects);

    people_creation_speed = parseInt(people_creation_speed * 0.7);
    if (people_creation_speed < 1) {
        people_creation_speed = 1;
    }
    level_wins += 1;
    biker_object.reset();
}


function update() {

	endOfLevel = background.levelFinished();
	if (background.levelFinished() == false) {
		frame_counter++;
		updateRandomPersonSpawn(frame_counter);
		biker_object.update(rightPressed, leftPressed, upPressed, downPressed);
		background.updateLevel(objects);
		objects_update();
        background_speed = offRoadSpeed;
		if (biker_object.is_alive) {
			check_biker_in_collision();
			updateScore();
			background_speed = onRoadSpeed;
		}
		background.setSpeed(background_speed);
		draw();
	}

	else if (biker_object.is_alive && biker_object.atFinishLine == false) {
		upPressed = true;
		biker_object.update(rightPressed, leftPressed, upPressed, downPressed, endOfLevel);
		draw();
	}
	else if (biker_object.is_alive && biker_object.atFinishLine == true) {
		drawWin();

        if (resetPressed) {
            win_reset_level();
        }
	}

	if (biker_object.is_alive == false) {
		drawGameOver();
        if (resetPressed) {
            initialize_game();
        }
	}
}

function updateScore() {
    var x_center = biker_object.x_position - biker_object.width/2;
    var y_center = biker_object.y_position - biker_object.height/2;

    if (background.isRoadAt(x_center, y_center)){
        score += 3;
    } else {
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


function objects_update() {
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
	
		if (object1.x_position + object1.width >= biker_object.x_position
			&& object1.x_position < biker_object.x_position + biker_object.width
			&& object1.y_position + object1.height >= biker_object.y_position
			&& object1.y_position < biker_object.y_position + biker_object.height){
            return 'biker'
		}
	}
	return false;
}

function check_biker_in_collision() {
	var check_collision = collision();
    if (check_collision){
    	biker_object.is_hit();
	}
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

function drawGameOver() {
	cc.font = "100px BadaBoom-BB";
	cc.fillStyle = "yellow";
	cc.fillText('GAME OVER!', 200, 250);
	cc.fillText('SCORE: ' + Math.floor(score), 230, 400);
	cc.font = "35px BadaBoom-BB";
	cc.fillText('PRESS X TO START OVER', 280, 550);
}

function drawWin() {
	cc.font = "100px BadaBoom-BB";
	cc.fillStyle = "yellow";
	cc.fillText('CONGRATULATIONS!', 100, 120);
	cc.fillText('YOU WIN', 270, 220)
	cc.fillText('SCORE: ' + Math.floor(score), 230, 330);
	cc.fillText('LEVEL WINS: ' + level_wins, 230, 430);
	cc.fillText('PRESS X TO CONTINUE', 230, 530);
	cc.font = "35px BadaBoom-BB";
	//cc.fillText('PRESS X TO START OVER', 280, 550);
}
