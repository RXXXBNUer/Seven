var $builtinmodule = function (name) {
	var demo = {__name__: new Sk.builtin.str("demo")}
	demo.move = new Sk.builtin.func(function(a) {
		a=Sk.ffi.remapToJs(a);
		move(a);
        return Sk.ffi.remapToPy(a);
    });
	return demo;
}
