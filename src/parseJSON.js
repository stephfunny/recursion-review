// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;




// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // var jsonArray = json.split('');
  // var nextChar = 0;
  // for (var i = 0; i < jsonArray.length; i++) {


  var parseString = function(string) {
    var firstChar = string.charAt(0);
    var remainderStr = string.substring(1, string.length - 1);
    var firstFourStr = string.substring(1, 5);
    if (firstChar === '[') {
      var result = [];
      if (remainderStr) {
        result.push(parseString(remainderStr));
      }
      return result;


    } else if (string === '') {
      // return null;
    }
  };

  //return parseString(json.substring(1, json.length - 1));
  return parseString(json);
};




    