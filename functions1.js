function findOutlier(integers){
  let even = []
  let odd = []
  for (let num of integers) {
    if(num % 2 === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  }
  if(even.length === 1) {
      return parseInt(even)
    } else {
      return parseInt(odd)
  }
}

function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'')
}

function makeNegative(num) {
  return num < 0 ? num : -num 
}

function repeatStr (n, s) {
    return s.repeat(n)
}
  
function minValue(values){
  let vals = values.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index
  })
  return parseInt(vals.sort().join(''))
}
  
function reverseStr(str){
  let reversed = ''
  for (let char of str) {
    reversed = char +reversed
  }
  return reversed
}

function findShort(s){
  let shortest = s.split(' ').sort((a,b) => {
    return b.length - a.length;
  });
  return shortest[shortest.length - 1].length
};

function XO(str) {
    
  let x = str.replace(/[^xX]/g).length;
  let o = str.replace(/[^oO]/g).length;

  return x === o ? true : false

}

function findDup( arr ){
  arr = arr.sort()
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return arr[i]
    }
  }
}

// function findDup( arr ){
//   var sortedArr = arr.sort((a, b) => {
//       return a - b
//   })
//   for (var i = 0; i < sortedArr.length; i++) {
//     if(sortedArr[i] === sortedArr[i+1]) {
//       return sortedArr[i]
//     }
//   }
// }

// function findDup( arr ){
//   var sortedArr = arr.sort((a, b) => {
//     return a - b
//   })
//   for (var i = 0; i < sortedArr.length; i++) {
//     if(sortedArr[i] === sortedArr[i-1]) {
//       return sortedArr[i];
//     }
//   }
// }

function capitalizeWord(word) {
  word = word.split('')
  word[0] = word[0].toUpperCase();
  return word.join('');
}

function randomCase(x) {
  x = x.split('')
  for (var i = 0; i < x.length; i++) {
    if (Math.random() >= 0.4) { 
      x[i] = x[i].toUpperCase() 
    }
    else { 
      x[i] = x[i].toLowerCase()
    }
  }
  return x.join('')
}

function noOdds( values ){
  let arr = []
  values.forEach((x) => {
    if (x % 2 === 0) {
      arr.push(x)
    }
  })
  return arr
}

function correct(string) {
  return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')
}

function getSize(width, height, depth) {
  //The volume, or amount of space inside a box is h × W × L. 
  //The outside surface area of a box is 2(h × W) + 2(h × L) + 2(W × L)
  let surfaceArea = (2 * (width * height)) + (2*(height * depth)) + (2*(width * depth))
  let vol = width * height * depth
  return [surfaceArea, vol]
}

function countBy(x, n) {
  //from x to n print the numbers that are divisable by x.
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr.push(x * i)
  }
  return arr
}

function noSpace(x){
  var arr = []
  x.split('')
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      arr.push(x[i])
    }
  }
  return arr.join('')
}

function capitalize(letters,indexes){
  return letters
    .split('')
    .map((letter, index) => 
      indexes.includes(index) ? letter.toUpperCase() : letter)
    .join('')
};

function createPhoneNumber(numbers){
  let arr = ["(" + numbers[0] + numbers[1] + numbers[2] +")" + " " + numbers[3] + numbers[4] +numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]]
  return arr.join('')
}

function getMiddle(s) {
  s = s.split('')
  var arr = [];
  var middle = s.length / 2
  if (s.length % 2 === 0) {
    arr.push(s[Math.round(s.length / 2 - 1)] , s[Math.round(s.length / 2)])
  } else {
    arr.push(s[s.length / 2 - 0.5])
  }
  return arr.join('')
}

function nerdify(txt){
  txt = txt.split('')
  let nerdified = txt.map((x) => {
    if (x.match(/a/gi)) {
      return x = '4'
    } else if (x.match(/e/gi)) {
      return x = '3'
    } else if (x.match(/l/)) {
      return x = '1'
    } else {
      return x
    }
  })
  return nerdified.join('')
}

function removeChar(str){
  str = str.split('')
  str.shift()
  str.pop()
  return str.join('')
};

function isVow(arr){
  return arr.map(char => (
    ['a', 'e', 'i', 'o', 'u'].indexOf(String.fromCharCode(char)) !== -1) ? String.fromCharCode(char) : char
  )
}

function multiplesOfThreeOrFive(number){
  let arr = []
  for(var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i)
    }
  }
  if(arr && arr.length) {
    return arr.reduce((sum, value) => {
      return sum + value;
    })
  } else {
    return 0
  }
}

decodeMorse = function(morseCode){
  var alphabet = {
     "...---...":"SOS",
     "-----":"0",
     ".----":"1",
     "..---":"2",
     "...--":"3",
     "....-":"4",
     ".....":"5",
     "-....":"6",
     "--...":"7",
     "---..":"8",
     "----.":"9",
     ".-":"a",
     "-...":"b",
     "-.-.":"c",
     "-..":"d",
     ".":"e",
     "..-.":"f",
     "--.":"g",
     "....":"h",
     "..":"i",
     ".---":"j",
     "-.-":"k",
     ".-..":"l",
     "--":"m",
     "-.":"n",
     "---":"o",
     ".--.":"p",
     "--.-":"q",
     ".-.":"r",
     "...":"s",
     "-":"t",
     "..-":"u",
     "...-":"v",
     ".--":"w",
     "-..-":"x",
     "-.--":"y",
     "--..":"z",
     "/":" ",
     "-.-.--":"!",
     ".-.-.-":".",
     "--··--":","
  };
  var messageConverted = [];

  morseCode.split("   ").map(function (word) {
      word.split(" ").map(function (letter) {
          messageConverted.push(alphabet[letter]);
      });
      messageConverted.push(" ");
  });
  return messageConverted.join('').toUpperCase().trim()
}

function formatNames(names){
  let nameList = names.map((x) => {
   return x.name
  })
  let firstNames = nameList.slice(0, -1).join(', ');
  let lastName = nameList.slice(-1)[0];
  if (!names[0]) {
    let empty = ''
    return empty
  } else if (firstNames) {
    return firstNames + ' & ' + lastName 
  } else if (!firstNames) {
    return lastName;
  }
}

function even_or_odd(number) {
  if(number % 2 === 1 || number % 2 === -1 ) {
     return 'Odd';
  }
  if (number % 2 === 0) {
    return 'Even';
  }
  
}

function removeSmallest(numbers) {
  var min = Math.min.apply(null, numbers);
  numbers.splice(numbers.indexOf(min), 1)
  return numbers
}

function printArray(array){
  return array.join(',')
}




