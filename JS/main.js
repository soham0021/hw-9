//  function getCurrentValue(){
// 	if(  * 1){
// 		var mul = getCurrentValue;
// 		return mul;
// 	}
// }

var Multipal = {currentValue:1,

	multiply:function(number){
		Multipal.currentValue *=number
		// return Multipal.currentValue
	},

	getCurrentValue:function(){
		return Multipal.currentValue
	}
}

	