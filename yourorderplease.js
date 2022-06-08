// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    // We concatenate a space at the end of the words string so that we can use every space as a marker in the for loop. We create an array arr and nest an if condition inside the for loop so each time it detects a space it uses the indices j and i to push the element through the slice function
    words = words.concat(' ')
    arr = []
    let j = 0
    for(i=0; i<=words.length-1; i++){
        if(words[i] == ' '){
            // console.log(j,i)
            arr.push(words.slice(j,i))
            j = i + 1
        }
    }
    // We can verify the type of element using the isNaN function and parseInt function. We will these conditions inside the for loop by setting the condition that if in every iteration it satisfies that it is false when tested as a NaN(which means it is a number), we will push that element into the arr1 array
    // console.log(isNaN(parseInt(arr[0][0])))
    // console.log(isNaN(parseInt(arr[0][1])))
    // console.log(isNaN(parseInt(arr[0][2])))

    arr1 = []
    for(i=0; i<=arr.length-1; i++){
        for(j=0; j<=arr[i].length-1; j++){
            // console.log(arr[i][j], parseInt(arr[i][j]), isNaN(parseInt(arr[i][j])))
            if( isNaN(parseInt(arr[i][j])) == false ){
                arr1.push( parseInt(arr[i][j]) )
            }
        }
        // console.log('=====')
    }
    console.log(arr)
    // console.log(arr1)
    // We sort the arr array in ascending order using the sort() function and assign it as arr1sorted
    arr1sorted = arr1.sort()
    // console.log(arr1sorted)

    // To make it easier to see the realtionship of the indices, we manually output or desired elements to make a comparison and we use three nested for loops because we have three indices, i,j,k
    // console.log(arr1sorted[0], arr[0][0])
    // console.log(arr1sorted[0], arr[0][1])
    // console.log(arr1sorted[0], arr[0][2])

    // console.log(arr1sorted[0], arr[1][0])
    // console.log(arr1sorted[0], arr[1][1])
    // console.log(arr1sorted[0], arr[1][2])

    // We create the finalarr array and use the nested for loops and inside the if condition, we compare each number of the arr1sorted to each letter in each string of the arr array. If it satisfies the condition, we push the string from the arr array using j as the index and use the function break so it continues to the next index
    finalarr = []
    for(i=0; i<=arr1sorted.length-1; i++){
        for(j=0; j<=arr.length-1; j++){
            for(k=0; k<=arr[j].length-1; k++){
                // console.log(i,j,k)
                // console.log(arr1sorted[i], arr[j][k])
                if(arr1sorted[i] == arr[j][k]){
                    finalarr.push(arr[j])
                    break
                }
            }
            // console.log('=====')
        }
    }
    console.log(finalarr)

    // console.log(arr1sorted[0], arr[1][3])
    // console.log(arr1sorted[0] == arr[1][3])

}
order('is2 Thi1s T4est 3a')
console.log('=====')
order('4of Fo1r pe6ople g3ood th5e the2')

// Here is a test of manual output so we can see the indices in which we will apply the slice function
// console.log(words.slice(0,3))
// console.log(words.slice(4,9))
// console.log(words.slice(10,15))
// console.log(words.slice(16,18))