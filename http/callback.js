function learn(something){
	console.log("learn "+something);
}

function we(callback,something){
	 something+="is cool";
	 callback(something);
}

we(learn,"Nodejs");