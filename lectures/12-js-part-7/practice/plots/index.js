const {plot} = require('nodeplotlib')


let xs = new Array(150).fill(null).map((v, i) => {
  return i
})

let Fx = xs => {
  return xs.map(x => x)
}

const scale = 1

plot([
  {
    x: xs, y: (xs => xs.map(x => Math.log(x)))(xs), name: 'O(log(n))', type: 'scatter', line: {color: 'green'}
  },
  {
    x: xs, y: (xs => xs.map(x => x))(xs), name: 'O(n)', type: 'scatter', line: {color: 'blue'}
  },
  {
    x: xs, y: (xs => xs.map(x => x * Math.log(x)))(xs), name: 'O(n*log(n))', type: 'scatter', line: {color: 'coral'}
  },
  {
    x: xs, y: (xs => xs.map(x => x ** 2))(xs), name: 'O(n^2)', type: 'scatter', line: {color: 'orange'}
  },
  {
    x: xs, y: (xs => xs.map(x => x ** 3))(xs), name: 'O(n^3)', type: 'scatter', line: {color: 'purple'}
  },
  {
    x: xs, y: (xs => xs.map(x => Math.exp(x)))(xs), name: 'O(e^n)', type: 'scatter', line: {color: 'red'}
  },
], {
  xaxis: {range: [0, xs.length / scale]},
  yaxis: {range: [0, xs.length / scale]},
})
