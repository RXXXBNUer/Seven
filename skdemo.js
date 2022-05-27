var $builtinmodule = function (name) {
	var demo = {__name__: new Sk.builtin.str("demo")}
	demo.move = new Sk.builtin.func(function(a) {
		a=Sk.ffi.remapToJs(a);
		switch(a){
			case 1:
			x-=4;
			break;
			case 2:
			x+=4;
			break;
			case 3:
			y-=3;
			break;
			case 4:
			y+=3;
			break;
		}
		player.position.set(x, y);
        return Sk.ffi.remapToPy(a);
    });
	return demo;
}
