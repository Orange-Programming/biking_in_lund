(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("test_level",
{ "height":5,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 8, 8, 2, 2, 2, 8, 8, 8, 8, 8],
         "height":5,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":5,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "columns":6,
         "firstgid":1,
         "image":"..\/..\/..\/..\/Dropbox\/FromEarthToEarth\/Doodles\/ground\/tiles_16x2.png",
         "imageheight":96,
         "imagewidth":192,
         "margin":0,
         "name":"tiles_16x2",
         "spacing":0,
         "tilecount":18,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":5
});