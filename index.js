const tools = require("js-math-tools")

function makeKey(keyLength, keySeed){
  tools.misc.assert(tools.math.isNumber(keyLength) && parseInt(keyLength) === keyLength, "`keyLength` must be an integer!")

  if (keySeed){
    tools.misc.assert(tools.math.isNumber(keySeed) && parseInt(keySeed) === keySeed, "`keySeed` must be an integer!")
    tools.math.seed(keySeed)
  }

  let out = ""
  let alpha = "abcdefghijklmnopqrstuvwxyz1234567890"
  for (let i=0; i<keyLength; i++) out += alpha[parseInt(tools.math.random() * alpha.length)]
  return out
}

module.exports = makeKey
