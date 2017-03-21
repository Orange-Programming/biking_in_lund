var sound = (function(){
	var sounds = {};

	function play(n){
		//Play sound with identifier
		sounds[n].play();
	}

	function add(name, filename, loops) {
		var loops = loops || false;
		sounds[name] = new Audio(filename);
		if (loops) {
			sounds[name].addEventListener('ended', function() {
			    this.currentTime = 0;
			    this.play();
			}, false);
		}
	}

	return {
		play : play,
		add : add
	}
}())

//load sounds

sound.add('crash', 'static/sound/crash.wav')
sound.add('bike-nopedal', 'static/sound/bike-nopedal.wav', true)