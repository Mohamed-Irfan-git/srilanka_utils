function formatCurrency(amount,{symbol = true}={}){
    const n = Number(amount);

    if(Number.isNaN(n)){
        return null;
    }

    const formatted = n.toLocaleString("en-LK",{
        minimumFractionDigits: 2,
        maximumFractionDigits :2
    });

    return symbol ? `Rs. ${formatted}`: formatted;
}

module.exports ={ formatCurrency };