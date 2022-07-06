const users = [
  { name: 'V', age: 25 },
  { name: 'V', age: 25 },
  { name: 'V', age: 24 },
  { name: 'V', age: 26 },
  { name: 'V', age: 26 },
];

// item ,index, array

function tallyFrom(arr) {
  return arr.reduce((tally, item) => {
    const age = item.age;
    tally[age] = (tally[age] || 0) + 1;
    return tally;
  }, {});
}

console.log(tallyFrom(users));
