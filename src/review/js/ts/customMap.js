// Написать кастомный метод map который будет доступен для всех массивов

const nums = [1, 2, 3, 4, 5, 2, 3];

// item ,index, array

Array.prototype.customMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

function tallyFrom(arr) {
  return arr.reduce((tally, item) => {
    tally[item] = (tally[item] || 0) + 1;
    return tally;
  }, {});
}

console.log(tallyFrom(nums));

// console.log('mapped')
