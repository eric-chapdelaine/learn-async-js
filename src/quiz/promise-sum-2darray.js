async function sumOfARow(arr, rowIdx) {
    if (arr.length > rowIdx) {
        let sum = 0;
        for (let i = 0; i < arr[rowIdx].length; ++i) {
            sum += arr[rowIdx][i];
        }
        return sum;
    }
    throw "Index out of bounds";
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

async function main() {
    let total = 0;
    try {

        rowSums = await Promise.all(rowSumPromises);
        for (const sum of rowSums) {
            total += sum;
        }
        console.log(`Total: ${total}`);
    } catch (err) {
        console.err(err);
    }
}

main();