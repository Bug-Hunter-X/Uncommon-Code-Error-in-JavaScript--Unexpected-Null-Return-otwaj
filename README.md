# Uncommon Code Error in JavaScript: Unexpected Null Return
This repository contains a simple JavaScript function with a subtle bug related to null value handling. The bug demonstrates an unexpected null return when one or both input parameters are null.

## Bug Description
The function `foo` adds two numbers. However, it unexpectedly returns `null` if either input is `null`. This behavior might not always be what's expected, leading to potential logic errors in larger applications.  The solution provides a more robust approach to handling null values.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` and examine the code.
3. Run the code using a JavaScript runtime environment (Node.js, browser's console, etc.).
4. Observe the unexpected `null` return values.

## Solution
The solution in `bugSolution.js` demonstrates how to modify the function to handle null values appropriately, providing a more robust and predictable outcome.  This example returns 0 when encountering a null value but you could implement any logic that fits your application's requirements.
