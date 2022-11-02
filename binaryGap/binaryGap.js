// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let N = 1041; // 10000010001 -> it should return 5

function solution(N) {
    let max = 0, counter = 0, counting = false;

    return binaryGap(N, max, counter, counting)
}

function binaryGap(num, max, counter, counting) {
    if (num == 0) return max;
    if (num == 1) return counter > max ? counter : max;
    if (num % 2 == 1) {
        counting = true;
        counter > max ? max = counter : counter = 0;
        counter = 0;
    }
    if (num % 2 == 0 && counting) {
        counter++;
    }

    num = Math.floor(num / 2)
    return (binaryGap(num, max, counter, counting))
}