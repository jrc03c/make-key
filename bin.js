#!/usr/bin/env node
const { exec } = require("child_process")
const makeKey = require("./index.js")

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    console.log("You must specify a key length.")
    process.exit(0)
  }

  let keyLength = parseInt(process.argv[2])
  let keySeed = null

  try {
    keySeed = parseInt(process.argv[3])
  } catch (e) {}

  const key = makeKey(keyLength, keySeed)
  console.log(key)

  try {
    exec(`echo "${key}" | xsel -b`, () => {})
  } catch (e) {}
}
