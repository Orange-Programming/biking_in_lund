function sprite(context, width, height, image, numberOfFrames, loop) {

	var that = {};

	that.context = context;
	that.width = width;
	that.height = height;
	that.image = image;
	that.loop = loop;

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

	return that;
}
