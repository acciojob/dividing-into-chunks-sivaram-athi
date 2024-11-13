const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // Check if adding the current number would exceed the max sum
    if (currentSum + num <= n) {
      // If it doesn't exceed, add the number to the current subarray
      currentSubarray.push(num);
      currentSum += num;
    } else {
      // If it exceeds, push the current subarray to the result and start a new subarray
      result.push(currentSubarray);
      currentSubarray = [num]; // Start a new subarray with the current number
      currentSum = num; // Reset the sum to the current number
    }
  }

  // Add the last subarray to the result (if any)
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
