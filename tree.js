function Tree(canvas, x_position, y_position) {
    this.canvas = canvas;
    this.canvas_context = canvas.getContext('2d');

    this.width = 90;
    this.height = 96;

    this.x_position = x_position;
    this.y_position = y_position;

    this.collWidth = 65;

    this.movement;

    this.image = new Image();
    this.image.src = "static/img/trees_2.png";

    this.sprite = sprite(this.canvas_context, this.width, this.height, this.image, 1, false);
}

Tree.prototype.draw = function() {
    this.sprite.render(this.x_position, this.y_position);
}

Tree.prototype.update = function() {
    this.movement = background_speed;
    this.y_position-=this.movement;
}