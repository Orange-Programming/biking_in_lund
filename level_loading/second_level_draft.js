(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("second_level_draft",
{ "height":20,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 11, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
         "height":20,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":40,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "columns":3,
         "firstgid":1,
         "image":"..\/..\/..\/Unity\/FromEarthToEarth\/Assets\/Textures\/Sketches\/tileset_bw4.png",
         "imageheight":96,
         "imagewidth":96,
         "margin":0,
         "name":"tileset_bw4",
         "spacing":0,
         "tilecount":9,
         "tileheight":32,
         "tiles":
            {
             "0":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":31.2727,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":31.6364,
                             "x":0.272727,
                             "y":0.454545
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "1":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":32.1818,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":33.1818,
                             "x":-0.636364,
                             "y":0.545455
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "2":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":32.7273,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":32.9091,
                             "x":-1.54545,
                             "y":-2.22045e-16
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "3":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":34.0909,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":33.8182,
                             "x":-1.27273,
                             "y":-1.63636
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "4":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":30.4545,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":29.9091,
                             "x":1,
                             "y":0.636364
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "5":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":34.2727,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":33.1818,
                             "x":-0.636364,
                             "y":-1.36364
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "6":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":33.8182,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":33.9091,
                             "x":-0.909091,
                             "y":-1.18182
                            }, 
                            {
                             "height":31.5455,
                             "id":2,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":31.9091,
                             "x":-0.181818,
                             "y":0.181818
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "7":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":33.8182,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":34.5455,
                             "x":-1.54545,
                             "y":-1.18182
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                },
             "8":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":33.6364,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":34.4545,
                             "x":-1.27273,
                             "y":-1.18182
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                }
            },
         "tilewidth":32
        }, 
        {
         "columns":3,
         "firstgid":10,
         "image":"..\/..\/..\/Unity\/FromEarthToEarth\/Assets\/Textures\/Sketches\/tileset_mud4.png",
         "imageheight":96,
         "imagewidth":96,
         "margin":0,
         "name":"MudTiles",
         "spacing":0,
         "tilecount":9,
         "tileheight":32,
         "tiles":
            {
             "1":
                {
                 "objectgroup":
                    {
                     "draworder":"index",
                     "height":0,
                     "name":"",
                     "objects":[
                            {
                             "height":34,
                             "id":1,
                             "name":"",
                             "rotation":0,
                             "type":"",
                             "visible":true,
                             "width":34.125,
                             "x":-1.25,
                             "y":-1.5
                            }],
                     "opacity":1,
                     "type":"objectgroup",
                     "visible":true,
                     "width":0,
                     "x":0,
                     "y":0
                    }
                }
            },
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":40
});