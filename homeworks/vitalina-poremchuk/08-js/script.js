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
      const values = value.split(".");
      for (let i in values) {
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

  function offset(endTime) {
    const startTime = moment("23.02.2021 14:00:00", "DD/MM/YYYY hh:mm:ss");
    const diffTime = moment(startTime).diff(endTime);

    const duration = moment.duration(diffTime);
    const years = duration.years(),
      days = duration.days(),
      months = duration.months(),
      hours = duration.hours(),
      minutes = duration.minutes();

    let result = "";
    if (years > 0) {
      result += years > 1 ? years + " years " : years + " year ";
    }
    if (days > 0) {
      result += days > 1 ? days + " days " : days + " day ";
    }
    if (hours > 0) {
      result += hours > 1 ? hours + " hours " : hours + " hour ";
    }
    if (minutes > 0) {
      result += minutes > 1 ? minutes + " minutes " : minutes + " minute ";
    }
    return (result += "ago");
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
}
solution3();

//task 4 Random dates
function solution4(date1, date2) {
  return new Date(
    date1.getTime() + Math.random() * (date2.getTime() - date1.getTime())
  );
}
solution4(new Date(2021, 1, 23), new Date(2021, 2, 23));

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

//task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function solution6() {
  const namedOne = {
    firstName: "Naomi",
    lastName: "Wang",

    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
      const fullNameArr = value.split(" ");
      const [firstName, lastName] = fullNameArr;
      if (lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  };
  namedOne.fullName;
  namedOne.lastName;
  namedOne.firstName = "John";
  namedOne.lastName = "Doe";
  namedOne.fullName;
  namedOne.fullName = "Bill Smith";
}
solution6();

//task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2/discuss/javascript
function solution7() {
  function OnceNamedOne(first, last) {
    return Object.freeze({
      firstName: first,
      lastName: last,

      get fullName() {
        return this.firstName + " " + this.lastName;
      },
    });
  }

  const user = new OnceNamedOne("John", "Doe");
  user.fullName;
  user.fullName, "John Doe", "Wrong full name";
  user.fullName;
}
solution7();

//task 9 https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function solution9(seconds) {
  const result = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    result(parseInt(seconds / (60 * 60))) +
    ":" +
    result(parseInt((seconds / 60) % 60)) +
    ":" +
    result(seconds % 60)
  );
}
solution9(60);
