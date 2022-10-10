/*
Exercise 6
Complete the following function definition for temperatureConverter.
It should take in one parameter, a STRING temp, 
which represents a temperature in  either degrees Celsius or Fahrenheit.
Ex. inputs: '28C', '102.5F', '-6C', etc.
Based on the unit of the input, the function should 
convert the temperature to the OTHER unit (C to F, F to C).
Ex. outputs: '82.4F', '38.9C', '21.2F', etc.
Make use of the previously defined celsiusToFahrenheit 
and fahrenheitToCelsius functions rather than rewriting the conversions.
*/

// /*Copy fahrenheitToCelsius function definition from class here*/
// let degreesC = ((temp - 32) * (5/9));

// /*Copy celsiusToFahrenheit function definition from Exercise 5 here*/
// // let degreesF = ((temp * (9/5) + 32).toFixed(1));
// let temp = '28C';
// console.log(temp);
// let tempArray = temp.split("");
// console.log(tempArray);


function temperatureConverter(temp) {
    //turn string into array

    let tempArray = temp.split("");
    let arrayEnd = tempArray.pop();
    let tempFront = temp.slice(0,temp.length - 1);
    // console.log(tempFront)
    let degreesC = ((tempFront - 32) * (5/9));

    // console.log(arrayEnd);
    // console.log(tempEnd);

    ////if F, use degreesC equation
    ////compare temp.length() == "F"

    if (arrayEnd == "F"){
    ////return new string + 'C'
        return (degreesC.toFixed(1) + "C");
    } else {
        let degreesF = ((tempFront * (9/5)) + 32)
        return (degreesF.toFixed(1) + "F")
    }
    //variable for length of array
    //pop method the get C or F
    //compare method 
        //convert remaining array back into string and 
        ////use degreesC equation
    //else 
        //convert array back into string
        //use degreesC equation  
    //return new string + 'F'

    /*Your Code Here*/
}

//Test Cases
console.log(`28C is equal to ${temperatureConverter('28C')}`);  //Should be 82.4F

console.log(`102.5F is equal to ${temperatureConverter('102.5F')}`);  //Should be 38.9C

console.log(`-6C is equal to ${temperatureConverter('-6C')}`);  //Should be 21.2F

