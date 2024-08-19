// Test Data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters
const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs for Test Data 1
const markBMI1 = markWeight1 / (markHeight1 ** 2);
const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// Determine if Mark has a higher BMI than John for Test Data 1
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log('Test Data 1:');
console.log('Mark\'s BMI:', markBMI1);
console.log('John\'s BMI:', johnBMI1);
console.log('Does Mark have a higher BMI than John?', markHigherBMI1);

// Test Data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters
const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs for Test Data 2
const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// Determine if Mark has a higher BMI than John for Test Data 2
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log('\nTest Data 2:');
console.log('Mark\'s BMI:', markBMI2);
console.log('John\'s BMI:', johnBMI2);
console.log('Does Mark have a higher BMI than John?', markHigherBMI2);