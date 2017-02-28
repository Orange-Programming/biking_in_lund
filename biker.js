function Biker(canvas) {

	this.canvas = canvas;
	this.canvas_context = canvas.getContext('2d');

	this.x_position = canvas.width / 2;
	this.y_position = canvas.height / 6;

	this.width = 64;
	this.height = 64;

	this.movement = 5;

	this.is_alive = true;

	this.image = new Image();
	this.image.src = "static/img/biker_large.png";

	this.sprite = sprite(this.canvas_context, 256, 64, this.image, 4, true);
}

Biker.prototype.is_hit = function() {
	this.is_alive = false;
}


Biker.prototype.update = function(rightPressed, leftPressed) {

	if (rightPressed) {
		this.x_position += this.movement;
	}
	else if (leftPressed) {
		this.x_position -= this.movement;
	}
	this.sprite.update();
}


Biker.prototype.draw = function() {
	if (this.is_alive) {
		this.sprite.render(this.x_position, this.y_position);		
	}
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


