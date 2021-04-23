function assert(n, ex, {s = false, t = false} = {}) {
  if (true !== !!ex) {
    if (t) {
      throw new Error(`${n}: Failed`)
    }
    console.error(`${n}: Failed`)
    return
  }

  if (!s) {
    console.info(`${n}: OK`)
  }
}

function genArray(len) {
  return Array(...new Array(len)).map(_ => {
    return ~~(Math.random() * 10)
  })
}

//
//
// function maxB(a, b) {
//   return a > b ? a : b
// }
//
// function maxM(a, b) {
//   return (Math.abs(a - b) + a + b) / 2
// }
//
// function maxA(a, b) {
//   return [a, b].sort((a, b) => a - b)[1]
// }
//
//
// let start = process.hrtime()
// assert('maxB', maxB(9, 4) === 9)
// assert('maxB', maxB(4, 0) === 4)
// assert('maxB', maxB(0, -100) === 0)
// assert('maxB', maxB(-100, -12) === -12)
// let end = process.hrtime(start)
// console.log(`maxB took: ${end[0] * 10000 + end[1]}`)
//
// start = process.hrtime()
// assert('maxM', maxM(9, 4) === 9)
// assert('maxM', maxM(4, 0) === 4)
// assert('maxM', maxM(0, -100) === 0)
// assert('maxM', maxM(-100, -12) === -12)
// end = process.hrtime(start)
// console.log(`maxM took: ${end[0] * 10000 + end[1]}`)
//
// start = process.hrtime()
// assert('maxA', maxA(9, 4) === 9)
// assert('maxA', maxA(4, 0) === 4)
// assert('maxA', maxA(0, -100) === 0)
// assert('maxA', maxA(-100, -12) === -12)
// end = process.hrtime(start)
// console.log(`maxA took: ${end[0] * 10000 + end[1]}`)
//
// start = process.hrtime()
// assert('Math.max', Math.max(9, 4) === 9)
// assert('Math.max', Math.max(4, 0) === 4)
// assert('Math.max', Math.max(0, -100) === 0)
// assert('Math.max', Math.max(-100, -12) === -12)
// end = process.hrtime(start)
// console.log(`Math.max took: ${end[0] * 10000 + end[1]}`)

//
// function pow1(x, n) {
//   let result = 1
//   while (n > 0) {
//     result *= x
//     n--
//   }
//   return result
// }
//
// function pow2(x, n) {
//   let res = 1
//   let mul = x
//   while (n > 0) {
//     if(n & 1) {
//       res *= mul
//     }
//
//     mul *= mul
//
//     n >>= 1
//   }
//
//   return res
// }
//
// const RUNS_NUM = 100
// const tookStorage = new Map()
// tookStorage.set(pow1, 0)
// tookStorage.set(Math.pow, 0)
// tookStorage.set(pow2, 0)
//
// function sugar() {}
// tookStorage.set(sugar, 0)
//
// for (let i = 0; i < RUNS_NUM; i++) {
//   const parr = genArray(2)
//
//   let start = process.hrtime()
//   const res1 = pow1(...parr)
//   let end = process.hrtime(start)
//
//   tookStorage.set(pow1, tookStorage.get(pow1) + (end[0] * 10000 + end[1]))
//
//   start = process.hrtime()
//   const res2 = Math.pow(...parr)
//   end = process.hrtime(start)
//
//   tookStorage.set(Math.pow, tookStorage.get(Math.pow) + (end[0] * 10000 + end[1]))
//
//   start = process.hrtime()
//   const res4 = parr[0] ** parr[1]
//   end = process.hrtime(start)
//
//   tookStorage.set(sugar, tookStorage.get(sugar) + (end[0] * 10000 + end[1]))
//
//   start = process.hrtime()
//   const res3 = pow2(...parr)
//   end = process.hrtime(start)
//
//   tookStorage.set(pow2, tookStorage.get(pow2) + (end[0] * 10000 + end[1]))
//
//   assert('pow1', Math.pow(...parr) === res1, {s: true})
//   assert('Math.pow', Math.pow(...parr) === res2, {s: true})
//   assert('pow2', Math.pow(...parr) === res3, {s: true})
//   assert('**', Math.pow(...parr) === res4, {s: true})
// }
//
//
// for(let f of tookStorage) {
//   console.info(`${f[0].name} took: ${~~(f[1] / RUNS_NUM)}`)
// }

/**
 * @param {string} src
 * @return {boolean}
 */
function brValid(src) {
  const opens = {
    P_O: '(',
    B_O: '[',
    C_O: '{',
    A_O: '<',
  }

  const closes = {
    ')': opens.P_O,
    ']': opens.B_O,
    '}': opens.C_O,
    '>': opens.A_O,
  }

  const stack = []

  for(let c of src) {
    if(Object.values(opens).includes(c)) {
      stack.push(c)
    }

    if(c in closes) {
      const last = stack.pop()
      if(last !== closes[c]) {
        return false
      }
    }
  }

  return !stack.length
}

assert('f1', brValid(`() [(])`))
assert('f2', brValid(`(`))
assert('f3', brValid(`}`))
assert('f4', brValid(`function aa(a1) { for(let i = 0; i == 100; i++) { a1 += i; }`))
assert('o1', brValid(`function aa(a1) { for(let i = 0; i == 100; i++) { a1 += i; }}`))
assert('o2', brValid(`(())([{}]){}`))
assert('o3', brValid(`()`))
assert('o4', brValid(`<>[]`))


