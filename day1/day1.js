const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let elfLoad = data.split('\n\n');

    let elfLoadToInts = elfLoad.map((string) => {
        return string.split('\n').map((elfLoad) => {
            return +elfLoad;
        });
    });

    let caloriesPerElf = elfLoadToInts.map((arr) => {
        return sumArray(arr);
    });

    // solution 1
    let biggest = Math.max.apply(Math, caloriesPerElf);
    let sortedCaloriesPerElf = caloriesPerElf.sort((a, b) => b - a);

    // solution 2
    let sumOfCalories = 0;
    for (let i = 0; i < 3; i++) {
        sumOfCalories += sortedCaloriesPerElf[i];
    }

    console.log(biggest);
    console.log(sumOfCalories);

    // console.log(sorted);
});


function sumArray(array) {
    return array.reduce((a, b) => a + b, 0)
}