/**
 * This function generates a personalized message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Personalized message for the user.
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // message will be "Hey Jack, at 25, you are in the prime of your life!"
 */
function generateMessage(name, age){
    // "Prime of your life!" message could be changed with if statements.
    return `Hey ${name}, at ${age}, you are in the prime of your life!`
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function titleCase(sentence){

    const splitString = sentence.split(" ");
    let returnString = "";

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase()+splitString[i].slice(1)
    }

    for (let i = 0; i < splitString.length; i++) {
        returnString = returnString +" "+ splitString[i];
    }
    // need to toString the split
    return returnString.trim();
}


/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start,end){

    let returnSum = 0;
    const array = [];

    for (let i = 0; i < end-start+1; i++) {
        array[i] = start+i;
    }

    for (let i = 0; i < array.length; i++) {
        returnSum += array[i];
    }
    return returnSum;
}



