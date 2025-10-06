const operatorMap = {
    "070": "Dialog",
    "071" : "Mobitel",
    "074": "Dialog",
    "075": "Airtel",
    "076": "Dialog",
    "077": "Dialog",
    "078" : "Hutch"
}

function normalize(phone){
    return String(phone).replace(/\s+/g,"");

}

function isValidPhone(phone){
    const s = normalize(phone);
    return /^07\d{8}$/.test(s);
}


function getOperator(phone){
    if(!isValidPhone(phone)){
        return null;

    }

    const s = normalize(phone);
    const prefix =s.slice(0,3);

    return operatorMap[prefix] || "Unknown";
}

module.exports = {isValidPhone,getOperator};