# to-null
Converts "nullsy" values to `null` (`undefined`, `false`, `NaN`), else returns the value

``` bash
npm install --save to-null
```

```javascript
var toNull = require("to-null");

toNull(false); // null
toNull(undefined); // null
toNull(""); // "" not really null
toNull([1,2,3]); // [1,2,3]
```
