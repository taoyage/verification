# verification.js

A library for data validation.

## Install


## Usage

### No ES6

```javascript
var verification = require('verification');
verification.isNumeric('123');
```

### ES6

```javascript
import verification from 'verification';
verification.isEmail('accord@123.com');
```

### With Browser

```javascript
<script type="text/javascript" src="./verification.js"></script>
<script type="text/javascript">
	const result = verification.isURL('http://www.taoyage.net');
</script>
```

## API

### verification base dataType

isUndefined
isDefined
isArray
isObject
isString
isNumber
isDate
isFunction
isRegExp
isFile
isFormData
isBoolean

### Required

isRequired

### verification string data

isURL
isLowervase
isUppercase
isNumeric
isEmail
isAscii
isIpv4
isIpv6
isIp

### verification option data




