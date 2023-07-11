// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

var countNegatives = function(grid) {
    let counter = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = grid[i].length; j >= 0; j--) {
            if (grid[i][j] < 0) counter++;
        }
    }

    return counter;

    // not my but alternative solution
    // return grid.flat().filter(el => el < 0).length;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 8
console.log(countNegatives([[3,2],[1,0]])); // 0