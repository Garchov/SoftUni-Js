function aggregateElements(numbers) {
  let calNum = 0;
  let inversNum = 0;
  let concatNum = "";
  numbers.forEach((plus) => {
    calNum += Number(plus);
  });
  numbers.forEach((plus) => {
    inversNum += 1 / plus;
  });
  numbers.forEach((plus) => {
    concatNum += plus;
  });
  console.log(calNum);
  console.log(inversNum);
  console.log(concatNum);
}
aggregateElements([1, 2, 3]);


// function ggregateElements(params) {
// 	function Sum(params) {
// 		return params.reduce((acc, val) => acc + val, 0);
// 	}
// 	function Inverse(params) {
// 		return params.reduce((acc, val) => acc + 1 / val, 0);
// 	}
// 	function Concat(params) {
// 		return params.reduce((acc, val) => String(acc) + String(val));
// 	}
// 	console.log(Sum(params));
// 	console.log(Inverse(params));
// 	console.log(Concat(params));
// }
// ggregateElements([1, 2, 3]);