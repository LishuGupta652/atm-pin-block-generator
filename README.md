## Atm pin block generator

### Adding to npm module

```bash
npm install --save pin-block-generation
```

### usage

```javascript
const { getPinBlock } = require("pin-block-generation");
getPinBlock("92389", "4000001234565");
// 0592789FFFEDCBA9
```
