const maxNum = 999999
const minNum = 100

export function hiddenWord(num) {
  if (isNotInRange(num)) {
    return false
  }
  let key = ""
  let stringNum = num.toString()
  for (let i = 0; i < stringNum.length; i++) {
    switch (stringNum[i]) {
      case "0":
        key += "o"
        break
      case "1":
        key += "b"
        break
      case "2":
        key += "l"
        break
      case "3":
        key += "i"
        break
      case "4":
        key += "e"
        break
      case "5":
        key += "t"
        break
      case "6":
        key += "a"
        break
      case "7":
        key += "d"
        break
      case "8":
        key += "n"
        break
      case "9":
        key += "m"
        break
    }
  }
  return key
}

function isNotInRange(num) {
  return num < minNum || num > maxNum
}
