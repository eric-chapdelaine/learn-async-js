function anyNegsInRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                for (let i = 0; i < arr[rowIdx].length; ++i) {
                    if (arr[rowIdx][i] < 0) {
                        reject(`negatives in row ${rowIdx}`)
                    }
                }
                resolve("No negatives");
            }, 0);
        } else {
            reject("invalid input")
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let anyNegsInRowPromises = []
for (let x = 0; x < array2D.length; ++x) {
    anyNegsInRowPromises.push(anyNegsInRow(array2D, x));
}

Promise.any(anyNegsInRowPromises)
    .then((res) => {
        console.log(res);
    })
    .catch ((err) => {
        console.log(err);
    });
