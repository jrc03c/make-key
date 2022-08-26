# Intro

**make-key** generates alphanumeric strings of arbitrary length.

# Node / browser

## Installation

```bash
npm install --save https://github.com/jrc03c/make-key
```

## Usage

```js
let makeKey = require("@jrc03c/make-key")
let keyLength = 32
let keySeed = 1234

console.log(makeKey(keyLength))
// "8v1101x1whevcm1cgdhuq90e12549xri"

console.log(makeKey(keyLength, keySeed))
// "dcb09fuuv3smirvqaetiyggvhap90e88"
```

# CLI

## Installation

```bash
git clone https://github.com/jrc03c/make-key
cd make-key
npm link
```

Optionally, you can install `xsel` to automatically have the key copied to the clipboard:

```bash
sudo apt-get install -y xsel
```

## Usage

```bash
# key <length> <seed-integer>
key 32 12345
```
