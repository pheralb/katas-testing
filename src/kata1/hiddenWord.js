const maxNum = 999999
const minNum = 100

export function hiddenWord(num) {
  if (isNotInRange(num)) {
    return false
  }

  let clave = ""
  let stringNum = num.toString()
  for (let i = 0; i < stringNum.length; i++) {
    clave += diccionario(stringNum[i])
  }
  return clave
}

function isNotInRange(num) {
  return num < minNum || num > maxNum
}

function diccionario(letter) {
  const arrayDiccionario = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"]
  return arrayDiccionario[parseInt(letter, 10)]
}
