let index = 0;
function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  if (nums.length === 2) {
    return [0, 1];
  }
  const firstElementValue = nums[0];
  const secondElementValue = nums[1];
  const lastElementValue = nums[nums.length - 1];
  const secondToLastElementValue = nums[nums.length - 2];
  const lastElementIndex =
    nums.indexOf(lastElementValue, 2) === -1
      ? nums.indexOf(lastElementValue)
      : nums.indexOf(lastElementValue, 2);
  const secondToLastElementIndex =
    nums.indexOf(secondToLastElementValue, 2) === -1
      ? nums.indexOf(secondToLastElementValue)
      : nums.indexOf(secondToLastElementValue, 2);
  if (firstElementValue + lastElementValue === target) {
    return [0, lastElementIndex];
  }
  if (firstElementValue + secondElementValue === target) {
    return [0, 1];
  }
  if (
    lastElementValue + secondToLastElementValue === target &&
    lastElementValue != secondToLastElementValue
  ) {
    return [secondToLastElementIndex, lastElementIndex];
  }

  if (
    lastElementValue + secondToLastElementValue === target &&
    lastElementValue === secondToLastElementValue
  ) {
    return [secondToLastElementIndex, lastElementIndex + 1];
  }
  for (const idx of nums) {
    const sumsFound = idx + nums[index] === target;
    const indexVarEqualsIndexArr = index === nums.indexOf(idx);
    if (sumsFound && !indexVarEqualsIndexArr && result.length === 0) {
      result.push(index, nums.indexOf(idx));
    }
  }
  if (result.length > 0) {
    return result;
  }
  index = index + 1;
  return twoSum(nums, target);
}
