// https://leetcode.com/problems/equal-row-and-column-pairs/

var equalPairs = function(grid) {
    let counter = 0;
    for(let i = 0; i < grid.length; i++) {
        const currRow = grid[i];

        for(let j = 0; j < grid.length; j++) {
            const currCol = grid.map(val => val[j]);
            
            if(currRow.join(',') === currCol.join(',')) counter++;
        }
    }

    return counter;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])); // 1
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // 3
console.log(equalPairs([[11, 1], [1, 11]])); // 2