function foo(a, b) {
  // Handle null values by defaulting to 0
  const aVal = a === null ? 0 : a;
  const bVal = b === null ? 0 : b;
  return aVal + bVal; 
}
console.log(foo(1,2)); //3
console.log(foo(null, 2)); //2
console.log(foo(1, null)); //1
console.log(foo(null, null)); //0