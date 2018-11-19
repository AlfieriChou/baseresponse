# baseresponse

[![Greenkeeper badge](https://badges.greenkeeper.io/AlfieriChou/baseresponse.svg)](https://greenkeeper.io/)

class response

[![NPM version][npm-image]][npm-url]

### 示例

```javascript
const Response = require('baseresponse')

const result = new Response(200, 1, '成功', {a:10}) // Response {status: 200, success: 1, message: '成功', data: {a:10} }
```

```javascript
const Response = require('baseresponse')

const result = Response.SUCCESS
console.log(result) // Response {status: 200, success: 1, message: '成功', data: {} }
```

```javascript
const Response = require('baseresponse')
Response.success.setData({a: 10})
const result = Response.success
console.log(result) // Response {status: 200, success: 1, message: '成功', data: { a: 10 } }
```

```javascript
const Response = require('baseresponse')
Response.success.setStatus(304)
Response.success.setData({a: 10})
const result = Response.success
console.log(result) // Response { status: 304, success: 1, message: '成功', data: { a: 10 } }
```

* ES6
```javascript
import Response from 'baseresponse'

const result = new Response(200, 1, '成功', {a:10}) // Response {status: 200, success: 1, message: '成功', data: {a:10} }
```

```javascript
import Response from 'baseresponse'

const result = Response.SUCCESS
console.log(result) // Response {status: 200, success: 1, message: '成功', data: {} }
```

```javascript
import Response from 'baseresponse'
Response.success.setData({a: 10})
const result = Response.success
console.log(result) // Response {status: 200, success: 1, message: '成功', data: { a: 10 } }
```

```javascript
import Response from 'baseresponse'
Response.success.setStatus(304)
Response.success.setData({a: 10})
const result = Response.success
console.log(result) // Response { status: 304, success: 1, message: '成功', data: { a: 10 } }
```

[npm-image]: https://img.shields.io/npm/v/baseresponse.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/baseresponse