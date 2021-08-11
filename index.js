const { assert, isNumber, int, seed, random } = require("@jrc03c/js-math-tools")

function makeKey(keyLength, keySeed) {
  assert(
    isNumber(keyLength) && int(keyLength) === keyLength,
    "`keyLength` must be an integer!"
  )

  if (keySeed) {
    assert(
      isNumber(keySeed) && int(keySeed) === keySeed,
      "`keySeed` must be an integer!"
    )

    seed(keySeed)
  }

  let out = ""
  let alpha = "abcdefghijklmnopqrstuvwxyz1234567890"

  for (let i = 0; i < keyLength; i++) {
    out += alpha[int(random() * alpha.length)]
  }

  return out
}

if (typeof module !== "undefined") {
  module.exports = makeKey
}
