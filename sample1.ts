// -------------------------------------------------- //

function Compute( num1:number , num2 : number)
{
    return num1 + num2;
}

// -------------------------------------------------- //

// Correct Argument Type and Number of parameters
var result = Compute( 10 , 20);

// Incorrect Argument Type: WONT Transpile
//var result = Compute( 10 , "20"); 

// Incorrect Number of Parameters: WONT Transpile
//var result = Compute( 10 ); 

console.log( result );

// -------------------------------------------------- //