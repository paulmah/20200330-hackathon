// edabit puzzle = Redundant Function
console.log( "Redundant Function" );
const f1 = redundant( "apple" );
const f2 = redundant( "pear" );
const f3 = redundant( "" );

function redundant(str) {
	return function redundantFunc() {  // help from bo to fix error   
		return str;
    }
}



// edabit puzzle = Ping Pong! - tried to push pong onto original array but that changes the size of arr.length.  gut hung up on the math and decided to take the easy way out
console.log( "Ping Pong!" );
console.log( pingPong(["Ping!", "Ping!", "Ping!", "Ping!", "Ping!"], false) );


function pingPong( arr, win ) {
    var pingPongArray = [];
    for ( i = 0; i <= arr.length - 2 ; i ++ ) {
        pingPongArray.push( "Ping!" )
        pingPongArray.push( "Pong!" )
    }
    pingPongArray.push( "Ping!" )
    if ( win ) {
        pingPongArray.push( "Pong!" )
    }
    return pingPongArray;
}

// edabit puzzle Object to Array
console.log( "Convert Key, Values in an Object to Array" );

function objectToArray(obj) {
    var arrayFromObject = [];
    for ( i =0; i < Object.keys( obj ).length; i++ ) {
        arrayFromObject.push( [ Object.keys( obj )[i], Object.values( obj )[i] ] );
    }
    return arrayFromObject;
}



