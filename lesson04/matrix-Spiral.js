module.exports = {
    matrix

}

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    //variables
    let value = 1;
    let leftColumn = 0;
    let rightColumn = n - 1;
    let topRow = 0;
    let bottomRow = n - 1;
    //loop
    while (leftColumn <= rightColumn && topRow <= bottomRow) {
        /// Top Row
        for (let i = leftColumn; i <= rightColumn; i++) {
            result[topRow][i] = value;
            value++;
        }
        topRow++;
        ///Rigth Column
        for (let i = topRow; i <= bottomRow; i++) {
            result[i][rightColumn] = value;
            value++
        }
        rightColumn--;
        // buttom Row
        for (let i = rightColumn; i >= leftColumn; i--) {
            result[bottomRow][i] = value;
            value++
        }
        bottomRow--;
        //Left Column
        for (let i = bottomRow; i >= topRow; i--) {
            result[i][leftColumn] = value;
            value++;
        }
        leftColumn++
    }
    return result
}
