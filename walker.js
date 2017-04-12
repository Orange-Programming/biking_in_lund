function Walker(canvas, x_position, y_position){
	this.canvas = canvas;
	this.canvas_context = canvas.getContext("2d");

	this.width = 24;
	this.height = 60;

	// position is not center, but corner
	this.x_position = x_position; // right side of object
	this.y_position = y_position; // top side of object

	this.collWidth = this.width;

	this.x_start = x_position;
	this.limit = 40;
	this.direction = Math.floor(Math.random()*2)*2-1;

	//random position
	this.x_position += Math.floor(Math.random()*this.limit)*this.direction;

	this.movement;
	this.walk_step = 3;

	var walkerSources = [
	"static/img/guy1_walkx4.png",
	"static/img/guy2_walkx4.png",
	"static/img/guy3_walkx4.png"
	];

	this.image = new Image();
    this.image.src = walkerSources[Math.floor(Math.random()*walkerSources.length)];

    this.sprite = sprite(this.canvas_context, this.width*2 , this.height, this.image, 2, true);
	this.look(['left','','right'][this.direction+1]);
}

Walker.prototype.draw = function() {
	this.sprite.render(this.x_position, this.y_position);
}

Walker.prototype.look = function(dir) {
	//Change the direction of the walker
	if (dir === 'left') {
		this.sprite.flip('left');
	} else if (dir === 'right') {
		this.sprite.flip('right');
	}
}

Walker.prototype.update = function() {
	this.movement = background_speed;
    this.y_position -= this.movement;
    if (Math.random() <= (1/25)) {
	//Pick another random direction: -1, 0 or 1
	this.direction = (this.direction + 1 + Math.floor(Math.random()*2)) % 3 - 1;
	this.look(['left','','right'][this.direction+1]);
    }
    this.x_position += this.direction * this.walk_step;
    this.sprite.update();
}
