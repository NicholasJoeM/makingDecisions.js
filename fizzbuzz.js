// Loop 1 to 50. if evenly divisible by 3, say 'fizz'
//if evenly divisible by 5 say 'buzz'. if both say 'fizzbuzz', otherwise say the number //



for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0)
    console.log("fizzbuzz")
    else if (i % 3 === 0)
    console.log("fizz")
    else if (i % 5 === 0)
    console.log("buzz")
    else console.log(i)
}