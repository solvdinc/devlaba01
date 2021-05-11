// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  if (typeof msg !== 'string') {
    if (msg === null) {
      throw new ReferenceError('Message is null!')
    } else {
      throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    }
  } else if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`)
  } else if (msg.includes('<') && msg.includes('>')) {
    return false
  }
  return true
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl).then((res) => res.json())

  if (!response.jokes) throw new Error(`No jokes at url: ${apiUrl}`)

  const jokeById = response.jokes.find((element) => element.id === jokeId)

  if (!jokeById) throw new Error(`No jokes found id: ${jokeId}`)

  return {
    saySetup() {
      return jokeById.setup
    },
    sayPunchLine() {
      return jokeById.punchLine
    },
  }
}

// task 3 setTimeout/setInterval

function startCounter() {
  let seconds = 0
  const logSeconds = setInterval(() => {
    if (seconds === 5) return clearInterval(logSeconds)
    seconds++
    return console.log(`Elapsed time: ${seconds} sec.`)
  }, 1000)
}

// task 5 Fetch API/XMLHttpRequest

function createUserCard(userFullName, userAvatar) {
  const userCard = document.createElement('div')
  const userCardAvatar = document.createElement('img')
  const userCardFullName = document.createElement('p')

  userCard.classList.add('user-card')
  userCardAvatar.classList.add('user-card__avatar')
  userCardAvatar.src = userAvatar
  userCardFullName.classList.add('user-card__name')
  userCardFullName.innerText = userFullName

  userCard.innerHTML += userCardAvatar.outerHTML + userCardFullName.outerHTML

  return userCard
}

async function doWithFetch(url) {
  const userGridContainer = document.querySelector('.users-grid')
  const response = await fetch(url).then((res) => res.json())
  response.results.map((user) => {
    const userFullName = `${user.name.title} ${user.name.first} ${user.name.last}`
    const userAvatar = user.picture.medium
    const userCard = createUserCard(userFullName, userAvatar)
    return userGridContainer.append(userCard)
  })
}

function doWithXMLHttp(url) {
  const userGridContainer = document.querySelector('.users-grid')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'json'
  xhr.send()

  xhr.onload = () => {
    if (xhr.status >= 400) {
      alert(xhr.response.message)
    } else {
      xhr.response.results.map((user) => {
        const userFullName = `${user.name.title} ${user.name.first} ${user.name.last}`
        const userAvatar = user.picture.medium
        const userCard = createUserCard(userFullName, userAvatar)
        return userGridContainer.append(userCard)
      })
    }
  }
}

window.onload = () => {
  // first function using fetch api
  doWithFetch('https://randomuser.me/api/?gender=female&results=10')
  // second function using XMLHttpRequest
  doWithXMLHttp('https://randomuser.me/api/?gender=female&results=10')
}

// task 6 Digit or not

function digitOrNot(string) {
  return /^\d/.test(string)
}

// task 7 Check if entry is a phone number

function checkPhoneNumber(string) {
  return /^\+380(\s)\d{2}[.-]\d{3}[.-]\d{4}$/.test(string) ? "That's probably a ukrainian phone number" : 'No info about such numbers'
}

// console.log(checkPhoneNumber('+380 99-000-0000'))
