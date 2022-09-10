const sumAll = function(valueStart, valueEnd) {
    if (typeof valueStart == "string" || typeof valueEnd == "string" || valueEnd < 0 || valueStart < 0 || Array.isArray(valueEnd) || Array.isArray(valueStart)) {
  
      return "ERROR"
  
    } else {
  
    if(valueStart > valueEnd){
  
      let temporaryStart = valueEnd;
      let temporaryEnd = valueStart;
      valueStart = temporaryStart
      valueEnd = temporaryEnd
  
      
    }
  
      
      let savedNumber = valueStart;
      while (valueStart < valueEnd) {
  
        valueStart++;
        savedNumber += valueStart;
     
  
      }
  
      return savedNumber;
  
    }
  
  }
  

// Do not edit below this line
module.exports = sumAll;
