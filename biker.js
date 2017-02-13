function Biker(canvas) {

	this.canvas = canvas;
	this.canvas_context = canvas.getContext('2d');

	this.x_position = canvas.width / 2;
	this.y_position = canvas.height / 6;

	this.movement = 5;

	this.image = new Image();
	this.image.src = "static/img/biker_large.png";

	this.sprite = sprite(this.canvas_context, 256, 64, this.image, 4, true);
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
	this.sprite.render(this.x_position, this.y_position);
}


