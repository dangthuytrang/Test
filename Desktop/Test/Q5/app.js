Array.prototype.naturalSort = function() {
    let stringRE = /^[A-Za-z]+$/
    let numberRE = /^[\d]+$/
    return this.sort(function(a, b) {
      let aIsString = stringRE.test(a);
      let bIsString = stringRE.test(b)
      let aIsNumeric = numberRE.test(a);
      let bIsNumeric = numberRE.test(b);
      aIsNumeric && bIsNumeric
      
      if (aIsString && bIsString) {
        return a.localeCompare(b);
      } else if (aIsNumeric && bIsNumeric) {
        return parseInt(a, 10) - parseInt(b, 10);
      } else if (aIsString && bIsNumeric) {
        return 1;
      } else if (aIsNumeric && bIsString) {
        return -1;
      } else if (aIsString || aIsNumeric) {
        return -1;
      } else if (bIsString || bIsNumeric) {
        return 1;
      } else {
        return a.localeCompare(b);
      }
    })
  };
  let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];

console.log(arr.naturalSort());