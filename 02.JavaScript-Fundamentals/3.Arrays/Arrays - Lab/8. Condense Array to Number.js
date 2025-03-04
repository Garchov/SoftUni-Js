function condenseArrayToNumber(arr) {
  //while the array has more that 1 element
  //for every element in the array , except the last , sum with next element
  let condensed = [];
  for (let n of arr) {
    condensed.push(n);
  }
  while (condensed.length > 1) {
    let temp = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      temp.push(condensed[i] + condensed[i + 1]);
    }
    condensed = temp;
  }
  console.log(condensed[0]);
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
