function reverseArray(arr) {
  let reverseArray = ["A","B","C"];{
    reverseArray.reverse();
  }
  return reverseArray;
}

function reverseArrayInPlace(arr) {
  let array = arr.length;
  for (let i = 0; i < Math.floor(array.length/2); i++) {
    console.log(i, array-i-1, arr[i], arr[len-i-1], arr);
    let swap = arr[i];
    arr[i] = arr[array-i-1];
    arr[array-i-1] = swap;
  }
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]