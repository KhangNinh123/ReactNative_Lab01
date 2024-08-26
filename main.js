// Test Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Test Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Test Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Function to calculate average score
function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b) / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg, minScore = 0) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
        console.log(`Koalas win with an average score of ${koalasAvg}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= minScore && koalasAvg >= minScore) {
        console.log(`It's a draw with both teams having an average score of ${dolphinsAvg}!`);
    } else {
        console.log('No team wins the trophy due to the minimum score requirement.');
    }
}

// Calculate average scores
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

// Test Data 1 Results
console.log('Test Data 1:');
determineWinner(dolphinsAvg1, koalasAvg1);

// Test Data Bonus 1 Results (with minimum score requirement of 100)
console.log('\nTest Data Bonus 1:');
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1, 100);

// Test Data Bonus 2 Results (with minimum score requirement of 100)
console.log('\nTest Data Bonus 2:');
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2, 100);
///Bai4
// Test data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Tip calculation using ternary operator
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// Print the results
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value is ${bill1 + tip1}`);
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value is ${bill2 + tip2}`);
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value is ${bill3 + tip3}`);
//part2_bai1
const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
};
// Data 1
checkWinner(avgDolphins1, avgKoalas1);

// Data 2
checkWinner(avgDolphins2, avgKoalas2);

//part2_bai2
// Step 1: Write the calcTip function
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Test the function with a bill value of 100
console.log(calcTip(100)); // Output should be 15

// Step 2: Create the bills array
const bills = [125, 555, 44];

// Step 3: Create the tips array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Bonus: Create the total array
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);  // Output: [125, 555, 44]
console.log(tips);   // Output: [18.75, 111, 8.8]
console.log(total);  // Output: [143.75, 666, 52.8]

