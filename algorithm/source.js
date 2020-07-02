// 9223372036854775807 9223372036854775808
// 18446744073709551615

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function (line) {
  const splitted = line.split(' ')

  const num1 = Array.from(splitted[0]).reverse()
  const num2 = Array.from(splitted[1]).reverse()

  const maxLength = Math.max(num1.length, num2.length)
  const minLength = Math.min(num1.length, num2.length)

  const result = Array(maxLength + 1)

  let over = 0

  for (let i = 0; i < maxLength; i += 1) {
    let add = parseInt(num1[i] || 0) + parseInt(num2[i] || 0) + over
    over = Math.floor(add / 10)
    add = add - over * 10
    result[i] = add
  }

  if (over) {
    result[maxLength] = over
  }

  console.log(result.reverse().join(''))

  rl.close()
}).on('close', function () {
  process.exit()
})
