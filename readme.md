**make-key** generates alphanumeric strings of arbitrary length. 

**Installation:**

```bash
npm install --save https://gitlab.com/jrc03c/make-key
```

**Usage:**

```js
let makeKey = require("make-key")
let keyLength = 32
let keySeed = 1234

console.log(makeKey(keyLength))
// "8v1101x1whevcm1cgdhuq90e12549xri"

console.log(makeKey(keyLength, keySeed))
// "dcb09fuuv3smirvqaetiyggvhap90e88"
```