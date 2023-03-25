  //q5
  const CASE1arrPow2 =(arr) => {
    let result = [];
    for (let i =0 ;i <arr.length; i++){
        result.push(Math.pow(2, arr[i]))
    }
    return result;
} 

const CASE2arrPow2 = (arr) => {
    let result=[];
    arr.forEach(number => {
        result.push(Math.pow(2,number));
    });
    return result;
}

let randomArray = Array.from({ length: 100 }, () =>   Math.floor(Math.random() * 100));
const evenNumbers = randomArray.filter(num => num % 2 === 0);
evenNumbers.sort((a , b) => a-b);

const CASE3arrPow2 = evenNumbers.map (evenNumbers => Math.pow(2,evenNumbers));

//q6
const example = [1,2,3,4,'n']
const discoverElement = example.map(example =>{
    if (typeof example === "number" && !isNaN(example)) {
        return example % 2 === 0 ? "even" : "odd";
      }else{
        return`N/A`
      }
});

//q7
const FizzBuzz = randomArray.map(randomArray => {   
    if (randomArray %3 === 0 ){
        return `fizz`;
    } else if (randomArray % 5 === 0){
        return 'buzz'
    }
    else if (randomArray % 3 ===0 && randomArray% 5 ===0){
        return `FizzBuzz`;
    }else{
        return randomArray +1;
    }

});