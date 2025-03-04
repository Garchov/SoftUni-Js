function equalArrays(arr1, arr2) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
    sum += Number(arr1[i]);
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(["10", "20", "30"], ["15", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
