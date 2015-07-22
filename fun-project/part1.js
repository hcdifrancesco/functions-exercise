//Use this file to implement Part One of your project

var animal;

var objKeyPrinter = function(object) {
	var result = "";
	for (var key in object) {
		if (object.hasOwnProperty(key)){
			result += key + " ";
		}
	}
return result;

}

console.log(objKeyPrinter({ species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }));

var objValuePrinter = function(object) {
	var result = "";
	for (var key in object) {
		if (typeof object[key] === 'string') {
			result += object[key] + " ";
		}

	}
	return result;
}
console.log(objValuePrinter({ species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }));


var arrValuePrinter = function(array){
	var result = "";
	for(var i = 0; i < array.length; i++) {
		result += array[i] + " ";
	}
	return result;
}

console.log(arrValuePrinter(['quack', 'honk', 'sneeze', 'growl']));



var dataTypeChecker = function(obj) {
	if (Array.isArray(obj)) {
		return "array";
	} else {
			return "object";
		}
		
	}
console.log(dataTypeChecker(['quack', 'honk', 'sneeze', 'growl']));


var capitalizeVals = function(obj) {
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			var valueString = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
			obj[key] = valueString
			}
	}
	return obj;
}
console.log(capitalizeVals({ species: 'duck', tagline: 'afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }));


var strCapitalizer = function(string) {
	var words = string.split(" ");
   var arr = [];
   for (i in words)
   {
      temp = words[i].toLowerCase();
      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      arr.push(temp);
   }
   return arr.join(" ");
				

		}

 console.log(strCapitalizer("my dog loves to eat homework"));

// Takes string, returns string with first letter of each word capitalized.



var unique = function(array) {
	var newArray = array.sort();
	var emptyArray = [];
	for(i=0; i<newArray.length; i++) {
		if (newArray[i] != newArray[i+1]){
			emptyArray.push(newArray[i]);
			
			
		}
	}
	return emptyArray;
}
console.log(unique([1,2,2,4,5,2,4,]));


 var extend = function(obj1, obj2) {
 	for (var prop in obj1){
 		if (obj1.hasOwnProperty(prop)){
 			obj2[prop] = obj1[prop]
 		}

 	}
 }

console.log(extend({ species: 'duck', tagline: 'afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }, {age : "old", kingdom : "animal"}))



var welcomeMessage = function(obj) {
	for (var key in obj){
		if (key === 'species'){
			return "Welcome, " + strCapitalizer(obj[key]) + "!";
		}
	}
}

console.log(welcomeMessage({ species: 'duck', tagline: 'afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }));

var profileData = function(obj) {
	var stringString = '';
	var arrayString = '';
	for (var key in obj){
		if (typeof obj[key] === 'string') {
			 stringString += strCapitalizer(key) + ": " + strCapitalizer(obj[key]) + ", ";
		} 
		else {
			arrayString = key + ": " + obj[key].join(", ");
		}
	
	}
	return stringString + arrayString;
}
console.log(profileData({ species: 'duck', tagline: 'afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }));






















