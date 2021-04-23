function assert(a) {
  if (a !== true) {
    throw new Error(`Assertation failed!`)
  }
}

const LOG = true
function log(...a) {
  !LOG || console.log(...a)
}

function powOn(x, n) {
  let start = process.hrtime()
  start = start[0] * 1000000 + start[1]

  let result = 1
  let counter = n

  while (counter > 0) {
    result *= x
    counter--
  }

  let finish = process.hrtime()
  finish = finish[0] * 1000000 + finish[1]
  log(`T:${finish - start}`)
  return result
}

assert(powOn(2, 0)  === Math.pow(2, 0))
assert(powOn(2, 1)  === Math.pow(2, 1))
assert(powOn(2, 4)  === Math.pow(2, 4))
assert(powOn(10, 2) === Math.pow(10, 2))
assert(powOn(3, 3) === Math.pow(3, 3))
log('-')
assert(powOn(3, 32)  === Math.pow(3, 32))

log(`-------------------------`)

function powReduce(x, n) {
  let start = process.hrtime()

  const result =  n === 0 ? 1 : new Array(  Math.floor(n)  )
    .fill(x)
    .reduce((acc, _) => acc * x)

  let took = process.hrtime(start)
  log(`T:${took[0] * 1000000 + took[1]}`)
  return result
}

assert(powReduce(2, 0)  === Math.pow(2, 0))
assert(powReduce(2, 1)  === Math.pow(2, 1))
assert(powReduce(2, 4)  === Math.pow(2, 4))
assert(powReduce(10, 2) === Math.pow(10, 2))
assert(powReduce(3, 3) === Math.pow(3, 3))
log('-')
assert(powReduce(3, 32)  === Math.pow(3, 32))

log(`-------------------------`)

function powSq(x, n) {
  let start = process.hrtime()

  let result = 1
  let xInPowOf2 = x

  while (n > 0) {

    if (n & 1) {
      result *= xInPowOf2
    }

    xInPowOf2 *= xInPowOf2
    n = n >> 1 //or n /= 2
  }

  let took = process.hrtime(start)
  log(`T:${took[0] * 1000000 + took[1]}`)
  return result
}
//log(powSq(3, 13))
assert(powSq(2, 0)  === Math.pow(2, 0))
assert(powSq(2, 1)  === Math.pow(2, 1))
assert(powSq(2, 4)  === Math.pow(2, 4))
assert(powSq(10, 2) === Math.pow(10, 2))
assert(powSq(3, 3) === Math.pow(3, 3))
log('-')
assert(powSq(3, 32)  === Math.pow(3, 32))

log(`Done`)

