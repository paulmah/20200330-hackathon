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



// edabit puzzle = Ping Pong! - not working
// console.log( "Ping Pong!" );
// console.log( pingPong(["Ping!", "Ping!", "Ping!"], true) );


// function pingPong( arr, win ) {
//     for ( i = 0; i <= arr.length * 2 ; i += 2 ) {
//         if ( arr[i] === null ) {
//             return arr;
//         } else {
//             if ( win = true ) {
//                 arr.splice( i+1, 0, 'Pong!' );
//             }
//         }
//     }
// }

``