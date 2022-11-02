# This is a training test from (Codility)[https://app.codility.com/] 

## Task Description:

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].


## Before Getting Started

For this solution, you need to know how to decimal to binary convertion is made. If you don't know, please make a little Google search :)


## My Approach:

There are different approaches for this case. You can use for loops, you can create new arrays and push the indexes to there and so on. I used a recursive solution which has less time complexity, has more understandable algorithm etc.

First of all, we will pass the first arguments as default.
```
function solution(N) {
    let max = 0, counter = 0, counting = false;

    return binaryGap(N, max, counter, counting)
}
```


Then everything start here. In this function we need to check the values first if they are end of the binary or not. 
```
function binaryGap(num, max, counter, counting) {
    
    //if end of binary is zero then there is no binary gap so return max;
    if (num == 0) return max; 
    
    //if end of binary is one so there would be a binary gap. If counter>max there is a gap, return counter. 
    if (num == 1) return counter > max ? counter : max; 
    
    // 'condition ? exprIfTrue : exprIfFalse' -> this structure is known as ternary operator
    
    
    //if remainder is 1 so we start to count
    if (num % 2 == 1) {
        counting = true;
        counter > max ? max = counter : counter = 0;
        counter = 0;
    }

    //if remainder is 0 we increase the counter
    if (num % 2 == 0 && counting) {
        counter++;
    }


    //we are going to pass the arguments until the num equals to 0 or 1
    num = Math.floor(num / 2) // Math.floor(131/2) returns 65.
    return (binaryGap(num, max, counter, counting))
}
```