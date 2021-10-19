const maxNum = 999999
const minNum = 100
// ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"]

export function hiddenWord(num) {
  if (isNotInRange(num)) {
    return false
  }
  let clave = ""
  let stringNum = num.toString()
  for (let i = 0; i < stringNum.length; i++) {
    switch (stringNum[i]) {
      case "0":
        clave += "o"
        break
      case "1":
        clave += "b"
        break
      case "2":
        clave += "l"
        break
      case "3":
        clave += "i"
        break
      case "4":
        clave += "e"
        break
      case "5":
        clave += "t"
        break
      case "6":
        clave += "a"
        break
      case "7":
        clave += "d"
        break
      case "8":
        clave += "n"
        break
      case "9":
        clave += "m"
        break
    }
  }
  return clave
}

function isNotInRange(num) {
  return num < minNum || num > maxNum
}
