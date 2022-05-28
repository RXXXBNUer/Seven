var $builtinmodule = function (name) {
	var demo = {__name__: new Sk.builtin.str("demo")}
	demo.move = new Sk.builtin.func(function(step) {
		step=Sk.ffi.remapToJs(step);
		x+=1;
		player.position.set(x, y);
        return Sk.ffi.remapToPy(step);
    });
	demo.change = new Sk.builtin.func(function(mode) {
		mode=Sk.ffi.remapToJs(mode);
		switch(mode){
			case 1:
			player.scale.x += 0.1;
			player.scale.y += 0.1;
			break;
			case 2:
			player.scale.x -= 0.1;
			player.scale.y -= 0.1;
			break;
			case 3:
			player.scale.x *= -1;
			break;
			case 4:
			player.scale.y *= -1;
			break;
		}
        return Sk.ffi.remapToPy(mode);
    });
	return demo;
}
