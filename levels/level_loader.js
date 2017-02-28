
function get_level_elements(level) {

  var layer1;
  var level_data;

  if (level == "level1") {
    layer1 = TileMaps.test_level.layers[0];
  }
  else if (level == "level2") {
    // This will be changed to something else
    layer1 = TileMaps.first_tiled_level.layers[0];
  }
  else {
    throw "Element " + level + " not implemented";
  }

  level_data = layer1.data;

  var level_width = layer1.width;
  var level_height = layer1.height;

  var map_elements = [];

  for (var i = 0; i < level_height * level_width; i++) {

    var x = i % level_width;
    var y = Math.floor(i / level_width);

    var element_value = level_data[i];

    var map_element = {"x":x, "y":y, "value":element_value};
    map_elements.push(map_element)
  }

  return(map_elements);
}