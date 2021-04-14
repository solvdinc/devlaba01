// task 1 Pluck
function solution1() {
  const user = {
    username: "testuser1",
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const randomValue = Math.random();
  const nullValue = null;

  function pluck(obj, value) {
    if (typeof obj !== "object" || obj === null) {
      return null;
    } else {
      let values = value.split(".");
      for (let i in values) {
        values.hasOwnProperty(i);
        obj = obj[values[i]];
        if (!obj) {
          return null;
        }
      }
      return obj;
    }
  }
  console.log(pluck(user, "preferences.sound.value")); // 30
  console.log(pluck(user, "unknown.key")); // null
  console.log(pluck(randomValue, "unknown.key")); // null
  console.log(pluck(nullValue, "unknown.key")); // null
}
solution1();

// task 2 Clone
function solution2() {
  const user = {
    username: "testuser1",
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  function clone(jsonObject) {
    return JSON.parse(JSON.stringify(jsonObject));
  }
  const clonedUser = clone(user);

  clonedUser.preferences.sound.maxValue = 70;

  console.log(
    user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
  ); // false
}
solution2();

//task 3 "A long time ago"
function solution3() {
  const { moment } = window;

  function offset(endData) {
    moment.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "1 hour",
        hh: "%d hours",
        d: "1 day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "366 days",
        yy: "years",
      },
    });

    const startDate = moment("23.02.2021 14:00:00", "DD/MM/YYYY hh:mm:ss");
    return (duration = endData.from(startDate));
  }

  console.log(offset(moment("23/02/2021 13:30:00", "DD/MM/YYYY hh:mm:ss")));
  //30 minutes ago
  console.log(offset(moment("23/02/2021 13:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 1 hour ago
  console.log(offset(moment("23/02/2021 11:30:00", "DD/MM/YYYY hh:mm:ss")));
  // 2 hours 30 minutes ago
  console.log(offset(moment("22/02/2021 14:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 1 day ago
  console.log(offset(moment("23/02/2020 10:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 366 days ago
}
solution3();

//task 4 Random dates
function solution4() {
  const date1 = new Date(2021, 1, 23);
  const date2 = new Date(2021, 2, 23);
  return new Date(
    date1.getTime() + Math.random() * (date2.getTime() - date1.getTime())
  );
}
solution4();

//task 5 https://www.codewars.com/kata/merged-objects
function solution5() {
  let a = { 1: "1", 2: "2", 3: "3" },
    b = { 3: "4", 5: "6", 6: "7", 7: "8" },
    c = { 5: "9", 8: "9", 6: "12", 23: "35" };
  o = [a, b, c];

  let objConcat = (o) => {
    return Object.assign({}, a, b, c);
  };
  objConcat();
  //should return the following
  // { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }
}
solution5();
