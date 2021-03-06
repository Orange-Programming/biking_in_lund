var background = (function background() {

	var tile_size = 32;
	var tile_cols_tileset = 6;
	var tile_cols_level = 25;

	var y_shift;
	var tot_height = 160*tile_size;  // TODO: Generalize
	var scroll_speed = 10;

	var level_data;
	var object_data;

	var tileset = "static/img/tileset.png";
	var tile_image;

	var loop_level = false;


	function loadLevel(level, game_objects) {

		y_shift = 0;

		level_data = get_level_elements(level, false);
		object_data = get_level_elements(level, true);
		//console.log("Level loaded!");
		
		time_image = new Image();
		time_image.src = tileset;

		createObstacleObjects(game_objects, object_data);
	}

	function createObstacleObjects(game_objects, object_data) {

		for (var i = 0; i < object_data.length; i++) {

			// debugPrintObstacleNumber(object_data[i].value);

			if (object_data[i].value === 73) {
				//console.log(object_data[i].value);
				var x_position = object_data[i].x * tile_size;
	        	var y_position = object_data[i].y * tile_size;
	        	objects.push(new Tree(c, x_position, y_position));
			}
			// else if (object_data[i].value === 74) {
			// 	var x_position = object_data[i].x * tile_size;
	        	// var y_position = object_data[i].y * tile_size;
	        	// objects.push(new Walker(c, x_position, y_position));
			// }
		}
	}

	function debugPrintObstacleNumber(field_value) {
		if (field_value !== 0) {
			console.log(field_value);
		}
	}

	function updateLevel(game_objects) {
		y_shift += background_speed;//scroll_speed;
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

		var current_target_y = (y * tile_size - y_shift);
		if (loop_level) {
			while (current_target_y < -tile_size) {
				current_target_y += tot_height;
			}
		}

		var tile_pos = getTilePosition(tile_nbr - 1);
		canvas.drawImage(time_image, tile_pos.x, tile_pos.y, tile_size, tile_size, 
			x * tile_size, current_target_y, tile_size, tile_size);
	}

	function getTilePosition(tile_nbr) {

		var row = Math.floor(tile_nbr / tile_cols_tileset);
		var col = tile_nbr % tile_cols_tileset;

		var x = col * tile_size;
		var y = row * tile_size;
		var pos = {x:x, y:y};
		return(pos);
	}

	function levelFinished() {
		if (y_shift >= tot_height-600) {
			return true;
		}
		return false;
	}

	function isRoadAt(x_pixel, y_pixel) {
		var x_tile = Math.ceil(x_pixel/32);
        var y_tile = Math.ceil((y_pixel + y_shift)/32);

		var index = arrayIndex(x_tile,y_tile,tile_cols_level);
		// console.log('index' + index)
		var value = level_data[index].value;
		// console.log('value' + value)
		return valueIsRoad(value);
	}

	function arrayIndex(x_tile, y_tile, cols){
		var index = x_tile + Math.floor(y_tile*cols);
		return index;
	}

	function valueIsRoad(value){
        var roadValues = [4,5,6, 10,11,12, 16,17,18, 19,20,21,22,23,24, 25,26,27,28,29,30, 31,32,33];

        var index = roadValues.indexOf(value); // -1 if missing
		return index != -1;
	}
    function setSpeed(speed) {
        scroll_speed = speed;
        //console.log('speed', speed, 'this scrollspeed', this.scroll_speed, 'ss', scroll_speed);
    }
	return {
		loadLevel: loadLevel,
		drawLevel: drawLevel,
		updateLevel: updateLevel,
		levelFinished: levelFinished,
		isRoadAt: isRoadAt,
		setSpeed: setSpeed
	}


}());