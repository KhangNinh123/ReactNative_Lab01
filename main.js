// Test Data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters
const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs for Test Data 1
const markBMI1 = markWeight1 / (markHeight1 ** 2);
const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// Determine who has a higher BMI and print the result
console.log('Test Data 1:');
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
} else {
    console.log(`Both Mark and John have the same BMI (${markBMI1.toFixed(1)})!`);
}

// Test Data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters
const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs for Test Data 2
const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// Determine who has a higher BMI and print the result
console.log('\nTest Data 2:');
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
} else {
    console.log(`Both Mark and John have the same BMI (${markBMI2.toFixed(1)})!`);
}
