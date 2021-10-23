const sortedData = (data, colCapitalized, compare) => {
  const toL = (word) => word.charAt(0).toLowerCase() + word.slice(1);

  const column = toL(colCapitalized);

  const minToMax = (a, b) => {
    if (a[column] < b[column]) {
      return -1;
    }
    if (a[column] > b[column]) {
      return 1;
    }
    return 0;
  };

  const maxToMin = (a, b) => {
    if (a[column] < b[column]) {
      return 1;
    }
    if (a[column] > b[column]) {
      return -1;
    }
    return 0;
  };

  if (compare === 'minToMax') {
    data.sort(minToMax);
  } else {
    data.sort(maxToMin);
  }

  return data;
};

export default sortedData;
