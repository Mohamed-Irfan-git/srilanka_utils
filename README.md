# Sri Lanka Utils

**Small helpers for Sri Lanka developers**: NIC validation, phone validation, LKR formatting, and Sinhala/Tamil date formatting.  

---

## Features

- ✅ Validate NIC numbers (old & new formats)  
- ✅ Validate Sri Lankan phone numbers (Dialog, Mobitel, Hutch, Airtel)  
- ✅ Get mobile operator from phone number  
- ✅ Format numbers as Sri Lankan Rupees (LKR) with commas and `Rs.`  
- ✅ Convert dates to **Sinhala** calendar format  
- ✅ Convert dates to **Tamil** calendar format  

---

## Installation

```bash
npm install srilanka_utils
```

## Usage


``` bash
const { 
  isValidNic, 
  isValidPhone, 
  getOperator, 
  formatCurrency, 
  formatSinhalaDate, 
  formatTamilDate 
} = require('srilanka_utils');

console.log(isValidNic('123456789V')); 
console.log(isValidNic('200012345678'));
console.log(isValidNic('foo')); 

console.log(isValidPhone('0771234567')); 
console.log(getOperator('0771234567')); 

console.log(formatCurrency(15000)); 

console.log(formatSinhalaDate('2025-10-06')); 
console.log(formatTamilDate('2025-10-06'));   
```


## API


| Function                  | Description                           | Example                                              |
| ------------------------- | ------------------------------------- | ---------------------------------------------------- |
| `isValidNic(nic)`         | Validate old or new Sri Lankan NIC    | `isValidNic('123456789V')  true`                     |
| `isValidPhone(phone)`     | Validate Sri Lankan phone number      | `isValidPhone('0771234567')  true`                   |
| `getOperator(phone)`      | Get mobile operator from phone prefix | `getOperator('0771234567')  Dialog`                  |
| `formatCurrency(amount)`  | Format number as LKR                  | `formatCurrency(15000)  Rs. 15,000.00`               |
| `formatSinhalaDate(date)` | Convert date to Sinhala format        | `formatSinhalaDate('2025-10-06')  6 ඔක්තෝබර් 2025`  | 
| `formatTamilDate(date)`   | Convert date to Tamil format          | `formatTamilDate('2025-10-06')  6 அக்டோபர் 2025`    |



## License

MIT License © Mohamed Irfan
