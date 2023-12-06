
//promblem-----given a number 'n', find the first 'n' elements of the fibonacci sequence

//In mathematics, the fibonacci sequence is a sequence in which each number 
//is the sum of the two proceeding ones

//The first two numbers in the sequence are 0 and 1.

//fibonacci(2) = [0,1]

//fibonacci(3) = [0,1,1]

//fibonacci(7) = [0,1,1,2,3,5,8]

// Calculation not dependent on input size -- 0(1)

//1 loop -- O(n)
//2 loop -- O(n^2)
//input size reduced by half -- O(logn)





//x = lenght and y = first value
function fibonacci(x,y) {
    const fib = [1,2];

    for (let i=y; i<=x; i++)
{
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;

}


console.log(3,0)// [0,1]
console.log(fibonacci(3,1)) // [0,1,1]
console.log(fibonacci(7,0)) // [0,1,1,2,3,5,8]

//keyword, name, parenthgesis, arguments(inputs or parameters), curlybarase