

const repeatString = function(text, number){
    let textTosave = ""; 
        if (number > -1){
            for(let i = 0; i < number; i++){
            
                textTosave = textTosave.concat(text);

            }

            return textTosave;
        }else{

            return "ERROR";
        }
    };

// Do not edit below this line
module.exports = repeatString;
