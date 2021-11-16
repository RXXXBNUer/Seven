var $builtinmodule = function (name) {
	var numpy = {__name__: new Sk.builtin.str("numpy")}
	numpy.arange = new Sk.builtin.func(function(start,stop,step,dtype) {
		var order = [Sk.ffi.remapToJs(start),Sk.ffi.remapToJs(stop),Sk.ffi.remapToJs(step),Sk.ffi.remapToJs(dtype)];
		var tem = undefined;
		for(i=0;i++;i<3){
			if(typeof(order[i])!=Number&&order[i]!==undefined){
				tem=order[i];
				order[i]=undefined;
				order[4]=tem;
				tem=undefined;
			}
		}
		if(order[2]===undefined){
			order[2]=order[1];
			order[1]=0;
		}
		order[1]=order[1]?order[1]:0;
		order[2]=order[2]?order[2]:1;
		
		var arr = new Array[];
		for(i=order[1];i<order[2];i+=order[3])arr.push(i);
		
        return Sk.ffi.remapToPy(arr);
    });
	return numpy;
}
