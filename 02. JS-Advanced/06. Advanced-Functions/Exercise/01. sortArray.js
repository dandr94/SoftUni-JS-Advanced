function sortArray(arr, str) {
  const sorting = {
    asc: (a) => a.sort((x, y) => x - y),
    desc: (a) => a.sort((x, y) => y - x),
  };

  return sorting[str](arr);
}

sortArray([14, 7, 17, 6, 8], "desc");
sortArray([14, 7, 17, 6, 8], "desc");
