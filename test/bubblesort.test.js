const bubbleSort = require('../sorting/bubbleSort.js');

if([0, 1, 2, 3, 5, 7, 23, 50, ].join('') == bubbleSort([ 2 , 1 , 3, 23 , 50, 5, 7, 0]).join('')){
    console.log('BUBBLE SORT WORKS HORRAY!')
}else{
    console.log('BUBBLE SORT DOES NOT WORK!');
};

