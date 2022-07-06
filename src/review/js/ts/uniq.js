const nums = [1, 2, 3, 4, 5, 4, 1, 3];
const o = {
  a: 0,
  b: 1,
};

const uniqNums = [...new Set(nums)];

for (const numsKey of nums) {
  console.log(numsKey);
}
