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
