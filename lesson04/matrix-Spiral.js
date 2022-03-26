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
    let left_Column = 0;
    let right_Column = n - 1;
    let top_Row = 0;
    let bottom_Row = n - 1;
    //loop
    while (left_Column <= right_Column && top_Row <= bottom_Row) {
        /// Top Row
        for (let i = left_Column; i <= right_Column; i++) {
            result[top_Row][i] = value;
            value++;
        }
        top_Row++;
        ///Rigth Column
        for (let i = top_Row; i <= bottom_Row; i++) {
            result[i][right_Column] = value;
            value++
        }
        right_Column--;
        // Bootom Row
        for (let i = right_Column; i >= left_Column; i--) {
            result[bottom_Row][i] = value;
            value++
        }
        bottom_Row--;
        //Left Column
        for (let i = bottom_Row; i >= top_Row; i--) {
            result[i][left_Column] = value;
            value++;
        }
        left_Column++
    }
    return result
}
