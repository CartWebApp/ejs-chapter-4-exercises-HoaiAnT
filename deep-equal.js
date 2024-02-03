function deepEqual(value, reference) {
  if (value === reference){
    return true;
  }
  if ((typeof value == "object" && value != null) && (typeof reference == "object" && reference != null)) {
    if (Object.keys(value).length != Object.keys(reference).length)
      return false;
    }
    for (var prop in value) {
      if (reference.hasOwnProperty(prop))
        return deepEqual(value[prop], reference[prop]);
    }
    if (value !== reference){
      return false;
    }
    else{
      return true;
    }
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
