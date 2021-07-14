# API


## Exceptions

- 500 family errors are not expected if they happened to write me vitalinaporemchuk@gmail.com
- 400 Bad request
- 404 Not found

## End-points

### Home page

`GET /`

Response example

`home page`

### page not found

`GET *`

Response example

```json
{
  "error": "Not found req.url",
  "status": 404
}
```

### sum of two numbers

`GET /sum`

Request example

`/sum?num1=2&num2=2`

* typeof `num1 && num2` number

Response example

```json
{
  "result": 4,
  "status": 200
}
```

Expected errors

- 400

```json
{
  "error": "Invalid data... Enter numbers",
  "status": 400
}
```

###  search an index of substring in a string

`GET /substr`

Request example

`/substr?string=Hello&start=1&length=3`

* typeof `string` string, typeof `start` number, typeof `length` number

Response example

```json
{
  "result": "ell",
  "status": 200
}
```

Expected errors

- 400

```json
{
  "error": {
  "error": "Invalid data... Enter parameters",
  "status": 400
  }
}
```

### reversing a given string

`GET /reverse`

Request example

`/reverse?string=Hello`

* typeof `string` string

Response example

```json
{
  "result": "olleH",
  "status": 200
}
```

Expected errors

- 400

```json
{
  "error": {
    "msg": "Invalid data... Enter string",
    "status": 400
  }
}
```