// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function solution1(msg) {
  if (msg === null) {
    throw ReferenceError("Message is null!");
  } else if (typeof msg !== "string") {
    throw TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  } else if (msg.length > 255 || msg.length === 0) {
    throw RangeError(`Message contains ${msg.length} characters!`);
  } else if (msg.includes("<") && msg.includes(">")) {
    return false;
  }
  return true;
}
solution1("How are ya doing?<br>Good!");

//task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function solution2(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const json = await response.json();

  if (!json.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const resultJokes = json.jokes.find((el) => el.id === jokeId);

  if (!resultJokes) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup() {
      return resultJokes.setup;
    },
    sayPunchLine() {
      return resultJokes.punchLine;
    },
  };
}

//task 3 setTimeout/setInterval
function solution3() {
  let count = 0;
  const time = setInterval(() => {
    count += 1;
    console.log(`Elapsed time: ${count} sec`);

    if (count >= 5) {
      clearInterval(time);
    }
  }, 1000);
}
// solution3();

//task 5 Fetch API/XMLHttpRequest
function solution5() {
  //XML
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://randomuser.me/api/?results=5");

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = function () {
    let responseObj = xhr.response;
    responseObj.results.forEach((user) => {
      document.querySelector(
        ".xml__list"
      ).innerHTML += `<li ><img src='${user.picture.medium}'><p>${user.name.title} ${user.name.first} ${user.name.last}</p>
                 </li>`;
    });
  };

  //fetch
  window.onload = () => {
    randomUserGenerator();
  };

  randomUserGenerator = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        showRandomUser(data);
      });
  };
  showRandomUser = (randomUser) => {
    randomUser.results.forEach((user) => {
      document.querySelector(
        ".fetch__list"
      ).innerHTML += `<li ><img src='${user.picture.medium}'><p>${user.name.title} ${user.name.first} ${user.name.last}</p>
           </li>`;
    });
  };
}
solution5();

//task 6 Digit or not
function solution6(str) {
  return (/\d/).test(str[0]);
}
solution6("3gggg");

//task 7 Optional (advanced)
function solution7(number) {
  return (/^\+380[\s]\d{2}[\.-]\d{3}[\.-]\d{4}$/).test(number);
}
solution7("+380 94-171-4375");
