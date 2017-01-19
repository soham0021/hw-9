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

// album 
// Photo is the parant witch has album and its taking picturs in as array 
function Photo(place , name){
	this.place = place
	this.name	= name
}
function Album(){
	this.photos = [];
}


var photo = new Photo("../images/photo1", "dog.jpg")
var album = new Album()

album.photos.push(photo)

//