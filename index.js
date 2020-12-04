#!/usr/bin/env node
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

if (require.main === module){
  let keyLength = parseInt(process.argv[2])
  let keySeed = process.argv.length > 3 ? parseInt(process.argv[3]) : null
  console.log(makeKey(keyLength, keySeed))
}