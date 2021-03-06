const numbers = [3, 4, 5, 6, 7, 8];

const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result)
}
console.log(output);

//Map function
numbers.map(function(element, index, array){
    console.log(element,index, array)
})

const result = numbers.map(function (element) {
    return element*element;
    
})
console.log(result)

const result0 = numbers.map(element => element*element);

const result1 = numbers.map(x => x*x);
console.log(result1);

//Filter

const result2 = numbers.filter(x => x > 3)
console.log(result2);

//Find

const result3 = numbers.find(x => x >3);
console.log(result3);
