function straightSearch(arr, needle) {
  for (let i = 0; i < arr.length; i++) {
    if (needle === arr[i]) {
      return i
    }
  }

  return -1
}

function binSearch(arr, needle) {
  let first = 0
  let last = arr.length

  let mid

  while (first < last) {
    mid = ~~((first + last) / 2)

    if (needle <= arr[mid]) {
      last = mid
      continue
    }

    first = mid + 1
  }

  return arr.length === 0 || arr[first] === needle ? first : -1
}

function assert(n, ev) {
  if (true !== !!ev) {
    console.error(`Assert ${n} failed`)
    return
  }

  console.info(`Assert ${n} OK`)
}

const arr1 = [1, 1, 1, 1, 2, 7, 4, 5, 5, 6, 3, 8, 9, 9, 9, 9, 9]
assert('SS1', arr1.indexOf(44) === straightSearch(arr1, 44))
assert('SS2', arr1.indexOf(3) === straightSearch(arr1, 3))
assert('SS3', arr1.indexOf(1) === straightSearch(arr1, 1))
assert('SS4', arr1.indexOf(9) === straightSearch(arr1, 9))
assert('SS5', arr1.indexOf(5) === straightSearch(arr1, 5))

const arr2 = [...arr1].sort()
assert('BS1', arr2.indexOf(44) === binSearch(arr2, 44))
assert('BS2', arr2.indexOf(3) === binSearch(arr2, 3))
assert('BS3', arr2.indexOf(1) === binSearch(arr2, 1))
assert('BS4', arr2.indexOf(9) === binSearch(arr2, 9))
assert('BS5', arr2.indexOf(5) === binSearch(arr2, 5))

const arr3 = Array.apply(null, Array(100000)).map(() => {
  const v = ~~(Math.random() * 1000) + 1
  if(v === 57) return '5s'
  return String(v)
})

function measure(n, op) {
  let start = process.hrtime()
  op()
  let took = process.hrtime(start)

  console.info(`${n}: ${took[0]}s ${took[1]}ns`)
}

measure('BS', () => {
  binSearch(arr3, 'ss')
})
measure('SS', () => {
  straightSearch(arr3, 'ss')
})
measure('iO', () => {
  arr3.indexOf('ss')
})
measure('in', () => {
  arr3.includes('ss')
})
