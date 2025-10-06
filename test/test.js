// Import the built-in assert module for testing
const assert = require('assert');

// Import all utility functions from your main index.js
const { 
    isValidNic, 
    isValidPhone, 
    getOperator, 
    formatCurrency, 
    formatSinhalaDate, 
    formatTamilDate 
} = require('../index');

// ---------------------- NIC Validation Tests ----------------------

// Test old NIC format (9 digits + V/v/X/x)
assert.strictEqual(isValidNic('123456789V'), true);

// Test new NIC format (12 digits)
assert.strictEqual(isValidNic('200012345678'), true);

// Test invalid NIC input
assert.strictEqual(isValidNic('foo'), false);

// ---------------------- Phone Number Validation Tests ----------------------

// Test valid Sri Lankan mobile numbers
assert.strictEqual(isValidPhone('0771234567'), true);
assert.strictEqual(isValidPhone('0711234567'), true);

// Test invalid phone number
assert.strictEqual(isValidPhone('12345'), false);

// ---------------------- Mobile Operator Tests ----------------------

// Test getting operator based on phone prefix
assert.strictEqual(getOperator('0771234567'), 'Dialog');

// ---------------------- Currency Formatting Test ----------------------

// Test formatting a number as Sri Lankan Rupees with proper commas and decimals
assert.strictEqual(formatCurrency(15000), 'Rs. 15,000.00');

// ---------------------- Date Formatting Tests ----------------------

// Format a date into Sinhala calendar format
const s = formatSinhalaDate('2025-10-06');

// Format a date into Tamil calendar format
const t = formatTamilDate('2025-10-06');

// Print results to console for visual verification
console.log(formatCurrency(15000));      // Rs. 15,000.00
console.log('Sinhala date:', s);         // 6 ඔක්තෝබර් 2025
console.log('Tamil date:', t);           // 6 அக்டோபர் 2025

// Final confirmation that all tests passed
console.log('All tests passed ✔');
