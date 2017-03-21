function Obstacle(canvas, x_position, y_position){
    this.canvas = canvas;
    this.canvas_context = canvas.getContext('2d');

    this.width = 96;
    this.height = 96;

    this.x_position = x_position;
    this.y_position = y_position;

    this.movement = background_speed;

    this.image = new Image();
    this.image.src = "static/img/trees.png";

    this.sprite = sprite(this.canvas_context, this.width, this.height, this.image, 1, false);
}

Obstacle.prototype.draw = function() {
    // this.canvas_context.fillStyle = 'green';
    // this.canvas_context.fillRect(this.x_position,
    //     this.y_position, this.width, this.height);
    this.sprite.render(this.x_position, this.y_position);
}

Obstacle.prototype.update = function() {

    this.y_position-=this.movement

}