function isValidNic(nic){
    if(!nic){
        return false;

    }

    const s = String(nic).trim();

    const oldNIC = /^\d{9}[VXvx]$/   // 9 digit and V or X
    const newNic = /^\d{12}$/       // 12  digit number

    return oldNIC.test(s) || newNic.test(s)
}

module.exports = { isValidNic };