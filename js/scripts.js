// edabit puzzle = Redundant Function
console.log( "Redundant Function" );
const f1 = redundant( "apple" );
const f2 = redundant( "pear" );
const f3 = redundant( "" );
console.log( f1, f2, f3 );

function redundant(str) {
	return function redundantFunc() {  // help from bo to fix error   
		return str;
    }
}


