const repeatString = function(string, num) {
    let tempString = string

    if(num < 0){
        return "ERROR"
    } 
    else if(num === 0){
        return ""
    }

    else{
        for(let i = 1; i < num; i++){
            string = string + tempString
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
