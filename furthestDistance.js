// https://leetcode.com/contest/weekly-contest-360/problems/furthest-point-from-origin/

var furthestDistanceFromOrigin = function (moves) {
    const arrMoves = moves.split('');
    const Rs = arrMoves.filter(el => el == 'R').length;
    const Ls = arrMoves.filter(el => el == 'L').length;
    let point = 0;

    const direction = Rs > Ls ? 'R' : 'L';

    for (const ch of moves) {
        let curr = ch;

        if (curr == '_') curr = direction;

        point = curr == 'R' ? point + 1 : point - 1;
    }

    return Math.abs(point);
};

console.log(furthestDistanceFromOrigin("L_RL__R")); // 3
console.log(furthestDistanceFromOrigin("_R__LL_")); // 5
console.log(furthestDistanceFromOrigin("_______")); // 7