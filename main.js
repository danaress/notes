// var Cat = function(name, color, weight, hairlength, attitude, adorability) {

// 	this.name = name;
// 	this.color = color;
// 	this.weight = weight;
// 	this.hairlength = hairlength;
// 	this.attitude = attitude;
// 	this.adorability = adorability;
// 	// this.meow = function() {
// 	// 	console.log(this.name + ' goes meow!')
// 	// }
// }



// var diabloCat = new Cat(

// 	'Diablo',
// 	'Red',
// 	17,
// 	'Short',
// 	'Cranky',
// 	'High'
// )


// // Attaching methods to Cat prototype

// Cat.prototype.meow = function(
// 	// console.log(this.name + ' goes meow!');
// )


// // create a quote class that has 2 properties. author and text of quote.
// // create two instances of quote class and console.log them.
// // have default values incase text or author isn't passed in.

var quote = function(author, text) {

	this.author = author || 'anonymous';
	this.text = text || '...';
};

// var firstQuote = new quote(
// 	'Bob',
// 	'quote text'
// )

var secondQuote = new quote(
	'Steve',
	'quoted text two'
)

// console.log(firstQuote);
// console.log(secondQuote);




// update your quote class to have a method
// method should return number of words in quote

quote.prototype.quoteNumber = function(){
	return (this.text.split(' ').length);
};