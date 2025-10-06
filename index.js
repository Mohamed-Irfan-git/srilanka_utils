const { isValidNic } = require("./utils/nic");
const { isValidPhone, getOperator } = require("./utils/phone");
const { formatCurrency } = require("./utils/currency");
const { formatSinhalaDate, formatTamilDate } = require("./utils/date");


module.exports ={
    isValidNic,
    isValidPhone,
    getOperator,
    formatCurrency,
    formatSinhalaDate,
    formatTamilDate
};