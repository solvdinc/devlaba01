function validateBraces(src, errorCb = null) {
  if ('string' !== typeof src) {
    throw new TypeError(`src must be a string`)
  }

  /** @const */
  const BRACES = {
    P_OPENED: '(',
    P_CLOSED: ')',
    S_OPENED: '[',
    S_CLOSED: ']',
    C_OPENED: '{',
    C_CLOSED: '}',
  }

  /** @const */
  const OPENS_MAP = {
    [BRACES.P_CLOSED]: BRACES.P_OPENED,
    [BRACES.S_CLOSED]: BRACES.S_OPENED,
    [BRACES.C_CLOSED]: BRACES.C_OPENED,
  }

  const stack = []

  const symbolList = [...src]

  for (let [i, ch] of symbolList.entries()) {
    if (!Object.values(BRACES).includes(ch)) {
      continue
    }

    if (Object.values(OPENS_MAP).includes(ch)) {
      stack.push(ch)
      continue
    }

    const last = stack.pop()
    if (last !== OPENS_MAP[ch]) {
      if ('function' === typeof errorCb) {
        errorCb(i+1)
      }

      return false
    }
  }

  return true
}

function printPos(i) {
  console.log(`Pos: ${i}`)
}
console.log(validateBraces('{[(dd){333}];};', printPos))
