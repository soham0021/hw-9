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
function Photo(picname, loc){
	this.picname = picname
	this.loc	= loc
}
function Album(){
	this.photos = [];
		this.photos.push(Photo)
}

	this.listAllPhotos = function(){
		for(i=0; i <this.photos.length; i++){
			cconsole.log(this.photos[i].picname)
		}
	}

	this.getPhoto = function(position){
		return this.photos[position - 1]
	}


var photo = new Photo("../images/photo1", "dog.jpg")
var album = new Album()


//school model
function Person (name , age) {
	this.name = name
	this.age=age
}
function Student(name,age,debt){
	Person.apply(this, arguments)
	this.debt = debt
}

function Teacher(name,age,classroom){
	this.classroom = classroom
	Person.apply(this, arguments)
}
function School(){
	this.teacher=[]
	this.student=[]
}
// prototype is inharting parent
Student.prototype = new Person()
Teacher.prototype = new Person()


var student = new Student("soham",23, 20000)
var teacher = new Teacher("mr.patel", 35 , "201s")
var school= new School()

school.teacher.push(teacher)
school.student.push(student)