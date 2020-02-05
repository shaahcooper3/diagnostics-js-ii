/**
 * Prints out the first n multiples of 13.
 *
 * The output should look like:
 *
 *   13 times 1 is 13
 *   13 times 2 is 26
 *   13 times 3 is 39
 *   13 times 4 is 52
 */
//I couldnt figure out how to print out all the multiples under the parameter
//Im assuming I need an array to store the multiples as they run through
//I only got it to print the input given.
function timesTable13(n) {
  for (i = 1; i <= 1000; i++) {
    if (n % 13 === 0) {
      console.log('13 times', n, 'is', 13 * n)
    }
  }

  console.log('13 times', n, 'is', 13 * n) // Use console.log to print out statements like "13 times 5 is 65"

}

if (require.main === module) {
  let input;

  input = 3;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();


  input = 5;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();
}
