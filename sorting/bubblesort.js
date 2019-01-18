const bubbleSort = (arr) =>{

let checkChanged;
    do {
        checkChanged = false;
        arr.forEach((x, index) => {
            // let nextVal = arr[index + 1];
            console.log(x, index, arr);
            if(index <= arr.length - 1){
                if(x > arr[index + 1]){
                    arr[index] = arr[index + 1];
                    arr[index + 1] = x;
                    checkChanged = true;
                }
            }
        });
    } while(checkChanged);
    return arr;
};
module.exports = bubbleSort;