const { moment } = window;

const currentDate = moment();
const nextMonth = currentDate.clone().add(1, 'months');
// console.log(currentDate.add(100, 'months'));

// console.log(nextMonth.diff(currentDate, 'days'));

console.log(currentDate.isBefore(nextMonth));
console.log(currentDate.isAfter(nextMonth));
console.log(currentDate.isSame(nextMonth));
