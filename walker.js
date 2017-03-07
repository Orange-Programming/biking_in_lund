function Walker(canvas, x_position, y_position){
	this.canvas = canvas;
	this.canvas_context = canvas.getContext("2d");

	this.width = 15;
	this.height = 30;

	// position is not center, but corner
	this.x_position = x_position; // right side of object
	this.y_position = y_position; // top side of object
	this.x_start = x_position;
	this.limit = 40;
	this.direction = 1;

	this.movement = 5;
	this.walk_step = 3;

	this.image = new Image();
    this.image.src = "Guy2_walk - rescaled.xcf";

    this.sprite = sprite(this.canvas_context, this.width, this.height, this.image, 1, false);
}

Walker.prototype.draw = function() {
    this.canvas_context.fillStyle = 'orange';
    this.canvas_context.fillRect(this.x_position,
        this.y_position, this.width, this.height);
    //this.sprite.render(this.x_position, this.y_position);
}

Walker.prototype.update = function() {

    this.y_position -= this.movement;

    if(this.x_position > this.x_start + this.limit || this.x_position < this.x_start - this.limit) {
    	this.direction = -this.direction;
    }
    this.x_position -= this.direction * this.walk_step;
}
