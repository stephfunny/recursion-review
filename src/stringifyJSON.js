// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //number, string, boolean, null, undefined, function
  // array, obj
  if (typeof(obj) === 'number') {
    return String(obj);
  } else if (obj === null) {
    return 'null';
  } else if (typeof(obj) === 'boolean') {
    return String(obj);
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    return '[' + obj.map( function(element) {
      return stringifyJSON(element);
    }).join(',') + ']';
  } else if (obj === undefined || typeof(obj) === 'function') {
    return '';
  } else {
    var pairs = [];
    Object.keys(obj).forEach(function (key) {
      var val = stringifyJSON(obj[key]);
      if (val) {
        pairs.push('"' + key + '":' + stringifyJSON(obj[key]));  
      }
    });
      
    return '{' + pairs.join(',') + '}';
  }


};
