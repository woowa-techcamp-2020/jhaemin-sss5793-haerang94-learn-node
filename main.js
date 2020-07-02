let a = 10
a = 30
const b = a + 10
console.log(b)

myFunc()

function myFunc() {
  const c = 10
  console.log(c)

  myFunc2()
}

function myFunc2() {
  console.log(1 + 2)
}
