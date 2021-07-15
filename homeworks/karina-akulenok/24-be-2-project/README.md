# API

## Exceptions
* 400 Bad request body
* 404 Not Found

## Error Message

* 400
```json
  {
    "error":"please add all need params"
  }
```

* 404
``` json
  {
    "error":"Invalid string"
  }
```

## Home

##### Request:
```json
  '/'
```
##### Response:
```json
  {
    "message": "home page"
  }
```
## Not Found

##### Request:
```json
  '*'
```
##### Response:
```json
  {
    "error": "NOT FOUND", "status": 404
  }
```

## Sum

##### Request:
```json
  '/sum?num1=10&num2=10'
```

##### Response:
``` json
  {
    "result": "20", "status":200
  }
```

## Reverse

##### Request:
```json
  '/reverse?string=server'
```

##### Response:
``` json
  {
    "result": "revres", "status":200
  }
```

## Substring

##### Request:
```json
  '/substr?string=server&start=2&length=3'
```

##### Response:
``` json
  {
    "result":"rve","status":200
  }
```