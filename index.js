// Code your solutions in this file
function writeCards(array, event) {
    let array2 =[]
    for (let i = 0; i < array.length; i++) {
    array2.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return array2

}

function countDown(number) {
    let number2 = 0
    while (number2 < (number + 1) ) {
      let number3 = number - number2
      console.log(number3)
      number2++
    }

}