var $builtinmodule = function (name) {
	var numpy = {__name__: new Sk.builtin.str("numpy")}
	numpy.sin = new Sk.builtin.func(function(a) {
		a=Sk.ffi.remapToJs(a);
		for(i=0;i<a.length;i++)a[i]=Math.sin(a[i]);
        return Sk.ffi.remapToPy(a);
    });
	return numpy;
}