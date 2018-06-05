function longest(s1, s2) {
  let str = s1 + s2
  let arr = str.split('').filter((elem, index, self) => {
    return index === self.indexOf(elem);
  })
  return arr.sort().join('')
}

function countSheeps(arrayOfSheep) {
  var count = 0;
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  console.log(count)
  return count
/*   return "There are " + count + " sheeps in total"; */
}

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

function sumArray(array) {
  function sortNum (a, b) {
    return a - b
  }
  if (array === null) {
    return 0
  } else {
    array.sort(sortNum)
    array.pop()
    array.shift()
    return array.reduce((a, b) => {
      return a + b
    }, 0)
  }
}