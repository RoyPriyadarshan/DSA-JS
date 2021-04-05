ThirdMaximumNumber = (nums) => {
    let tempMax=null
    let [firstMax, secondMax, thirdMax] = [-Infinity, -Infinity, -Infinity]
    nums.forEach(element => {
        if (element > firstMax) {
            thirdMax = secondMax
            secondMax = firstMax
            firstMax = element
            tempMax=element
        } else if (element > secondMax && element < firstMax) {
            thirdMax = secondMax
            secondMax = element
            tempMax=element
        } else if (element > thirdMax && element < secondMax) {
            thirdMax = element
        }
    });
    console.log(thirdMax===-Infinity?tempMax:thirdMax)
}

input =  [5,2,2]
ThirdMaximumNumber(input)