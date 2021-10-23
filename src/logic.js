const sortedData = (data, sortedBy, compare) => {
  const minToMax = (a, b) => {
    if (a[sortedBy] < b[sortedBy]) {
      return -1;
    }
    if (a[sortedBy] > b[sortedBy]) {
      return 1;
    }
    return 0;
  };

  const maxToMin = (a, b) => {
    if (a[sortedBy] < b[sortedBy]) {
      return 1;
    }
    if (a[sortedBy] > b[sortedBy]) {
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
