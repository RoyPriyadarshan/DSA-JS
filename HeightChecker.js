HeightChecker = (heights) => {
    let numberOfArrangmentsDone = 0
    let arrangedHeight = [...heights].sort((a, b) => a - b)
    arrangedHeight.forEach((element, i) => {
        if (heights[i] != element) {
            numberOfArrangmentsDone++
        }
    });
    console.log(numberOfArrangmentsDone)
}

testcase = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]
HeightChecker(testcase)