//Break
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element > 5){
        break;
    }
    console.log(element);
}

//Continue
const joinNums = [11, 22, -33, 44, -55, 66, -77, 88];
for (let i = 0; i < joinNums.length; i++) {
    const element = joinNums[i];
    if(element < 0){
        continue;
    }
    console.log(element);
}