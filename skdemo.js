var $builtinmodule = function (name) {
	var demo = {__name__: new Sk.builtin.str("demo")}
	demo.move = new Sk.builtin.func(function() {
		x-=4;
		player.position.set(x, y);
        return 0;
    });
	return demo;
}
