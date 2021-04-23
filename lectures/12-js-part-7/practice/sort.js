const assert = require('./assert')

function genArr(len) {
  return Array.apply(null, new Array(len)).map(() => {
    return ~~((Math.random() * 100) + 1)
  })
}

function bubbleSort(arr) {
  bubbleSort.swap = bubbleSort.swap || ((i, j, arr) => {
    const mem = arr[i]
    arr[i] = arr[j]
    arr[j] = mem
  })

  for (let i = 0; i + 1 < arr.length; i++) {
    for (let j = 0; j + 1 < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        bubbleSort.swap(j + 1, j, arr)
      }
    }
  }

  return arr
}

function selectionSort(arr) {
  let last = arr.length - 1
  let max = 0
  while (last > 0) {
    for (let i = 0; i <= last; i++) {
      if (arr[max] < arr[i]) {
        max = i
      }
    }

    let mem = arr[max]
    arr[max] = arr[last]
    arr[last] = mem

    max = 0
    last--
  }

  return arr
}


function simpleQuickSort(arr) {
  if (arr.length < 2) return arr

  const pivot = ~~(arr.length / 2)
  const left = []
  const right = []
  const middle = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      left.push(arr[i])
      continue
    }

    if (arr[pivot] < arr[i]) {
      right.push(arr[i])
      continue
    }

    middle.push(arr[i])
  }
  return [...simpleQuickSort(left, false), ...middle, ...simpleQuickSort(right, false)]
}

function quickSort(arr) {
  const swap = (i, j, arr) => {
    const mem = arr[i]
    arr[i] = arr[j]
    arr[j] = mem
  }

  const partition = (arr, left, right) => {
    const pivot = arr[~~((left + right) / 2)]
    let i = left
    let j = right

    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }

      while (arr[j] > pivot) {
        j--
      }

      if (i <= j) {
        swap(i, j, arr)
        i++
        j--
      }
    }

    return i
  }

  const quickSortImp = (arr, left, right) => {
    const index = partition(arr, left, right)

    if (left < index - 1) {
      quickSortImp(arr, left, index - 1)
    }

    if (index < right) {
      quickSortImp(arr, index, right)
    }
    return arr
  }

  if (arr.length > 1) {
    quickSortImp(arr, 0, arr.length - 1)
  }

  return arr
}

const arr1 = genArr(100)

assert('bubble_s 1', [...arr1].sort((a, b) => a - b).join(',') === bubbleSort([...arr1]).join(','))
assert('bubble_s 2', [].sort((a, b) => a - b).join(',') === bubbleSort([]).join(','))
assert('bubble_s 3', [0, 2, 1].sort((a, b) => a - b).join(',') === bubbleSort([0, 2, 1]).join(','))

const arr2 = arr1
assert('select_s 1', [...arr2].sort((a, b) => a - b).join(',') === selectionSort([...arr2]).join(','))
assert('select_s 2', [].sort((a, b) => a - b).join(',') === selectionSort([]).join(','))
assert('select_s 3', [0, 2, 1].sort((a, b) => a - b).join(',') === selectionSort([0, 2, 1]).join(','))
assert('select_s 4', [0, 2, 100].sort((a, b) => a - b).join(',') === selectionSort([0, 2, 100]).join(','))
assert('select_s 4', [1000, 2, 100].sort((a, b) => a - b).join(',') === selectionSort([1000, 2, 100]).join(','))

const arr3 = arr1
assert('quick__s 1', [...arr3].sort((a, b) => a - b).join(',') === simpleQuickSort([...arr3]).join(','))
assert('quick__s 2', [].sort((a, b) => a - b).join(',') === simpleQuickSort([]).join(','))
assert('quick__s 3', [0, 2, 1].sort((a, b) => a - b).join(',') === simpleQuickSort([0, 2, 1]).join(','))
assert('quick__s 4', [3].sort((a, b) => a - b).join(',') === simpleQuickSort([3]).join(','))
assert('quick__s 4', [1000, 2, 100].sort((a, b) => a - b).join(',') === simpleQuickSort([1000, 2, 100]).join(','))

const arr4 = arr1
assert('quickM_s 1', [...arr4].sort((a, b) => a - b).join(',') === quickSort([...arr4]).join(','))
assert('quickM_s 2', [].sort((a, b) => a - b).join(',') === quickSort([]).join(','))
assert('quickM_s 3', [0, 2, 1].sort((a, b) => a - b).join(',') === quickSort([0, 2, 1]).join(','))
assert('quickM_s 4', [3].sort((a, b) => a - b).join(',') === quickSort([3]).join(','))
assert('quickM_s 4', [1000, 2, 100].sort((a, b) => a - b).join(',') === quickSort([1000, 2, 100]).join(','))

