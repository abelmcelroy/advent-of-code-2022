const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  const elfLoads = data.split('\n\n');
    
  const elfLoadsToInts = elfLoads.map((string) => {
      return calorieTotal(string.split('\n'));
  });
  
  const sortedCaloriesPerElf = elfLoadsToInts.sort((a, b) => b - a);

  // solution 1
  const firstElf = sortedCaloriesPerElf.slice(0,1);
  console.log("largest:", calorieTotal(firstElf));
  
  // solution 2
  const first3Elves = sortedCaloriesPerElf.slice(0,3)
  console.log("sum of largest 3:", calorieTotal(first3Elves));
});


function calorieTotal(array) {
  return array.reduce((totalCals, cals) => totalCals + parseInt(cals), 0);
}
