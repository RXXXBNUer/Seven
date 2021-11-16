var $builtinmodule = function (name) {
	var mod = {__name__: new Sk.builtin.str("mod")}
	mod.arange = new Sk.builtin.func(function(start,stop,step,dtype) {
		start=Sk.ffi.remapToJs(start);
		stop=Sk.ffi.remapToJs(stop);
		step=Sk.ffi.remapToJs(step);
		var arr = new Array[];
		for(i=start;i<stop;i+=dtype)arr.push(i);
		
        return Sk.ffi.remapToPy(arr);
    });
	return mod;
}