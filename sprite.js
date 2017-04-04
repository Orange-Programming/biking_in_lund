function sprite(context, width, height, image, numberOfFrames, loop) {

	var that = {};

	that.context = context;
	that.width = width;
	that.height = height;
	that.source = image.src;
	that.image = image;
	that.loop = loop;
	that.flipped = false;

	var frameIndex = 0;
	var tickCount = 0;
	var ticksPerFrame = 6;
	var numberOfFrames = numberOfFrames || 1;

	that.render = function(x_position, y_position) {
		that.context.drawImage(
			that.image,
			frameIndex * that.width / numberOfFrames,
			0,
			that.width / numberOfFrames,
			that.height,
			x_position,
			y_position,
			that.width / numberOfFrames,
			that.height);
	};


	that.update = function() {
		tickCount += 1;
		if (tickCount > ticksPerFrame) {
			tickCount = 0;
			if (frameIndex < numberOfFrames - 1) {
				frameIndex += 1;
			}
			else if (that.loop) {
				frameIndex = 0;
			}
		}
	};

	that.flip = function(dir){
		//Switch image from source.png to source_flip.png and back
		if (dir === 'left' || (dir != 'right' && this.flipped)) {
			this.image.src = this.source;
			this.flipped = false;
		} else if (dir === 'right' || dir != 'left') {
			var index = this.source.indexOf('.png');
			this.image.src = this.source.slice(0, index) + '_flip.png';
			this.flipped = true;
		}
	}

	return that;
}
