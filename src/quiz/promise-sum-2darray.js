function sumOfARow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[rowIdx].length; ++i) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject("invalid input")
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rowSumPromises = []
for (let x = 0; x < array2D.length; ++x) {
    rowSumPromises.push(sumOfARow(array2D, x));
}

Promise.all(rowSumPromises)
    .then((sums) => {
        let total = 0;
        for (const sum of sums) {
            total += sum;
        }
        console.log(`Total: ${total}`);
    })
    .catch ((err) => {
        console.log(err);
    });
