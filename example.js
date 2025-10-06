const { isValidNic,formatCurrency,formatSinhalaDate} = require("./index");

console.log(isValidNic("199923402345"));
console.log(formatCurrency(1234567));
console.log(formatSinhalaDate(new Date()));