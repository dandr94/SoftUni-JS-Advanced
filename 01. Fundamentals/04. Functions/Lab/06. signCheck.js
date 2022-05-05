function signCheck(numOne, numTwo, numThree) {
  let negativeNumbers = 0;

  if (isNegative(numOne)) {
    negativeNumbers += 1;
  }

  if (isNegative(numTwo)) {
    negativeNumbers += 1;
  }

  if (isNegative(numThree)) {
    negativeNumbers += 1;
  }

  if (negativeNumbers % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

function isNegative(num) {
  return num < 0;
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
