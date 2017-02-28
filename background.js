var background = (function background() {

	var tile_size = 32;
	var tile_cols = 3;

	var level_data;

	var tileset = "static/img/grass_tileset_32px.png";
	var tile_image;
	// var tile_sprite;

	function loadLevel(level) {

		level_data = get_level_elements(level);
		console.log("Level loaded!");
		time_image = new Image();
		time_image.src = tileset;

	}

	function drawLevel(canvas) {

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
		var tile_pos = getTilePosition(tile_nbr - 1);
		canvas.drawImage(time_image, tile_pos.x, tile_pos.y, 32, 32, x * tile_size, y * tile_size, 32, 32);
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
		drawLevel: drawLevel
	}

}());