

function Biker(canvas) {

	this.canvas = canvas;
	this.canvas_context = canvas.getContext('2d');

	this.diameter = 32;

	this.x_position = canvas.width / 2;
	this.y_position = canvas.height / 6;

	this.movement = 5;


}


Biker.prototype.update = function(rightPressed, leftPressed) {

	if (rightPressed) {
		this.x_position += this.movement;
	}
	else if (leftPressed) {
		this.x_position -= this.movement;
	}
}


Biker.prototype.draw = function() {
	this.canvas_context.fillStyle = 'orange';
	this.canvas_context.fillRect(this.x_position,
		this.y_position, this.diameter, this.diameter);



}