var capitals = function (word) {
	return word.split('').map((char,index) => {
    if (char === char.toUpperCase()) {
      return index;
    }
  }).filter(item => item !== undefined)
};