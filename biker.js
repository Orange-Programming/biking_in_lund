function Biker(canvas) {

	this.canvas = canvas;
	this.canvas_context = canvas.getContext('2d');

	this.x_position = canvas.width / 2;
	this.y_position = canvas.height / 6;

	this.width = 64;
	this.height = 64;

	this.movement = 5;

	this.boundary_margin = 20;

	this.is_alive = true;

	this.image = new Image();
	this.image.src = "static/img/biker_large.png";

	this.sprite = sprite(this.canvas_context, 256, 64, this.image, 4, true);
}

Biker.prototype.is_hit = function() {
	this.is_alive = false;
}


Biker.prototype.update = function(rightPressed, leftPressed,downPressed,upPressed) {

	if (upPressed && this.upBoundaryCheck()) { // breaking  - can't move sideways or down
		this.y_position -= this.movement;
	}

	else { // compatible movements
		if (downPressed && this.downBoundaryCheck()) { // accelerate 
			 	this.y_position += this.movement;
		} 
		if (rightPressed && this.rightBoundaryCheck()) { // can also move right
			this.x_position += this.movement;
		}
		if (leftPressed && this.leftBoundaryCheck()) { // or left
			this.x_position -= this.movement;
		}
		// if both left and right, biker doesn't move in x-direction
	} 

	this.sprite.update();
}


Biker.prototype.draw = function() {
	if (this.is_alive) {
		this.sprite.render(this.x_position, this.y_position);		
	}
}

// returns true if illegal position
Biker.prototype.leftBoundaryCheck = function() {
	if (biker_object.x_position > 0 + boundary_margin){
		return true;
	} return false;
}
Biker.prototype.rightBoundaryCheck = function() {
	if (biker_object.x_position < this.canvas.width - boundary_margin){
		return true;
	} return false;
}
Biker.prototype.upBoundaryCheck = function() {
	if (biker_object.y_position > 0 + boundary_margin){
		return true;
	} return false;
}
Biker.prototype.downBoundaryCheck = function() {
	if (biker_object.y_position < this.canvas.height - boundary_margin){
		return true;
	} return false;
}

function Obstacle(canvas, x_position, y_position){
    this.canvas = canvas;
    this.canvas_context = canvas.getContext('2d');

    this.width = 50;
    this.height = 50;

    this.x_position = x_position;
    this.y_position = y_position;

    this.movement = 5;
}

Obstacle.prototype.draw = function() {
    this.canvas_context.fillStyle = 'green';
    this.canvas_context.fillRect(this.x_position,
        this.y_position, this.width, this.height);
}

Obstacle.prototype.update = function() {

    this.y_position-=this.movement

}

function Walker(canvas, x_position, y_position){
	this.canvas = canvas;
	this.canvas_context = canvas.getContext("2d");

	this.width = 15;
	this.height = 30;

	this.x_position = x_position;
	this.y_position = y_position;
	this.x_start = x_position;
	this.limit = 40;
	this.direction = 1;

	this.movement = 5;
	this.walk_step = 3;
}

Walker.prototype.draw = function() {
    this.canvas_context.fillStyle = 'orange';
    this.canvas_context.fillRect(this.x_position,
        this.y_position, this.width, this.height);
}

Walker.prototype.update = function() {

    this.y_position -= this.movement;

    if(this.x_position > this.x_start + this.limit || this.x_position < this.x_start - this.limit) {
    	this.direction = -this.direction;
    }
    this.x_position -= this.direction * this.walk_step;
}



