interface IOverlappedAndNonIncludedIntervals {
  overlap: number[][];
  notInclude: number[][];
}

function getOverlappedIntervals(numbers: number[][]): number[][] {
  const overlap: number[][] = [];
  let overlapStart = -1;
  let overlapEnd = -1;
  numbers.forEach((number) => {
    // If the number is 1 and both overlapStart and overlapEnd are not -1, signifying the conclusion of an overlap, we push the overlap to the overlap array and reset overlapStart and overlapEnd.
    if (number[1] === 1 && overlapStart !== -1 && overlapEnd !== -1) {
      overlap.push([overlapStart, overlapEnd]);
      overlapStart = -1;
      overlapEnd = -1;
    }

    // If the number is greater than 1 and overlapStart is -1 (signifying the beginning of an overlap), we set both overlapStart and overlapEnd to the current number.
    if (number[1] > 1 && overlapStart === -1) {
      overlapStart = number[0];
      overlapEnd = number[0];
    }

    // If the number is greater than 1 and overlapStart is not -1 (indicating an ongoing overlap), we update overlapEnd to the current number.
    if (number[1] > 1 && overlapStart !== -1) {
      overlapEnd = number[0];
    }
  });

  return overlap;
}

// This function filters out intervals that are not included within the given intervals.
function getNotIncludedIntervals(numbers: number[][]): number[][] {
  const excludedNumbers = numbers.filter((number) => number[1] === 0);
  if (excludedNumbers.length === 0) return [];
  const notInclude: number[][] = [];
  let notIncludeStart = excludedNumbers[0][0];
  let notIncludeEnd = excludedNumbers[0][0];

  for (let i = 1; i < excludedNumbers.length; i++) {
    // If the next number is equal to the current number plus 1, indicating that the excluded interval is still ongoing, we update notIncludeEnd.
    if (excludedNumbers[i][0] === notIncludeEnd + 1) {
      notIncludeEnd = excludedNumbers[i][0];
    } else {
      // If the next number is not equal to the current number plus 1, signaling the end of the excluded interval, we push the interval to the notInclude array and reset notIncludeStart and notIncludeEnd.
      notInclude.push([notIncludeStart, notIncludeEnd]);
      notIncludeStart = excludedNumbers[i][0];
      notIncludeEnd = excludedNumbers[i][0];
    }
  }
  // Push the last interval to the notInclude array
  notInclude.push([notIncludeStart, notIncludeEnd]);
  return notInclude;
}


// This function accepts ranges only between 0 and 20
export default function getNumberIntervals(intervals: number[][]): IOverlappedAndNonIncludedIntervals {
  // An array of 21 elements, each element being an array of 2 elements: the first element representing a number and the second element indicating its frequency of appearance within the intervals.
  const numbers: number[][] = new Array(21)
    .fill([0, 0])
    .map((_, index) => [index, 0]);

  intervals.forEach((interval) => {
    for (let i = interval[0]; i <= interval[1]; i++) {
      numbers[i][1] += 1;
    }
  });

  const overlap: number[][] = getOverlappedIntervals(numbers);
  const notInclude: number[][] = getNotIncludedIntervals(numbers);

  return {
    overlap,
    notInclude
  };
}