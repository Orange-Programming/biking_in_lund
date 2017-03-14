var background = (function background() {

	var tile_size = 32;
	var tile_cols = 6;

	var y_shift = 0;
	var tot_height = 2560;  // TODO: Generalize
	var scroll_speed = 10;

	var level_data;

	var tileset = "static/img/tileset.png";
	var tile_image;

	function loadLevel(level) {

		level_data = get_level_elements(level);
		console.log("Level loaded!");
		time_image = new Image();
		time_image.src = tileset;
	}

	function updateLevel(game_objects) {

		var current_level_values = [];

		// var current_target_y = (y * tile_size - y_shift);



	}

	function drawLevel(canvas) {

		y_shift += scroll_speed;

		if (!level_data) {
			throw Exception("Need to call loadLevel before drawing!");
		}

		for (var i = 0; i < level_data.length; i++) {
			var obj = level_data[i];
			var x_pos = obj.x;
			var y_pos = obj.y;
			var tile_nbr = obj.value;

			if (tile_nbr !== 0) {
				drawTile(canvas, x_pos, y_pos, tile_nbr);				
			}
		}
	}

	function drawTile(canvas, x, y, tile_nbr) {

		var current_target_y = (y * tile_size - y_shift);
		while (current_target_y < -tile_size) {
			current_target_y += tot_height;
		}

		var tile_pos = getTilePosition(tile_nbr - 1);
		canvas.drawImage(time_image, tile_pos.x, tile_pos.y, 32, 32, 
			x * tile_size, current_target_y, 32, 32);
	}

	function getTilePosition(tile_nbr) {

		var row = Math.floor(tile_nbr / tile_cols);
		var col = tile_nbr % tile_cols;

		var x = col * tile_size;
		var y = row * tile_size;
		var pos = {x:x, y:y};
		return(pos);
	}

	return {
		loadLevel: loadLevel,
		drawLevel: drawLevel,
		updateLevel: updateLevel
	}

}());