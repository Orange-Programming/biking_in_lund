function Walker(canvas, x_position, y_position){
	this.canvas = canvas;
	this.canvas_context = canvas.getContext("2d");

	this.width = 20;
	this.height = 56;

	// position is not center, but corner
	this.x_position = x_position; // right side of object
	this.y_position = y_position; // top side of object
	this.x_start = x_position;
	this.limit = 40;
	this.direction = Math.floor(Math.random()*2)*2-1;

	//random position
	this.x_position += Math.floor(Math.random()*this.limit)*this.direction;

	this.movement = 10;
	this.walk_step = 3;

	this.image = new Image();
    this.image.src = "static/img/guy1_walkx4.png";

    this.sprite = sprite(this.canvas_context, this.width*2 , this.height, this.image, 2, true);
    if (this.direction < 0) {
	this.sprite.flip();
    }
}

Walker.prototype.draw = function() {
	this.sprite.render(this.x_position, this.y_position);
}

Walker.prototype.update = function() {

    this.y_position -= this.movement;

    if(this.x_position > this.x_start + this.limit || this.x_position < this.x_start - this.limit) {
    	this.direction = -this.direction;
	this.sprite.flip();
    }
    this.x_position -= this.direction * this.walk_step;
    this.sprite.update();
}
