function Biker(canvas) {

	this.canvas = canvas;
	this.canvas_context = canvas.getContext('2d');

	// position is not center, but corner
	this.x_position = canvas.width / 2;
	this.y_position = canvas.height / 6;

	this.width = 64;
	this.height = 64;

	this.movement = background_speed;

	this.boundary_margin = 32;

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
	if (this.x_position + this.width/2 > (0 + boundary_margin)){
		return true;
	} return false;
}
Biker.prototype.rightBoundaryCheck = function() {
	if (this.x_position + this.width/2 < this.canvas.width - boundary_margin){
		return true;
	} return false;
}
Biker.prototype.upBoundaryCheck = function() {
	if (this.y_position + this.height/2 > 0 + boundary_margin){
		return true;
	} return false;
}
Biker.prototype.downBoundaryCheck = function() {
	if (this.y_position + this.height/2 < this.canvas.height - boundary_margin){
		return true;
	} return false;
}



