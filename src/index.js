module.exports = function reverse (n) {
    
    let ResultStr = "";

    n = Math.abs(n)

    for(let i = n.toString().length-1; i >= 0; i--){
        ResultStr += n.toString().charAt(i);
    }

    return ResultStr;
}
