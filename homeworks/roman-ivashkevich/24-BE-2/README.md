# Homework

## Exceptions

- 400 Bad request
- 404 Not found

## End-points

### start page

`GET /`

Response example

`home reached`

### page not found

`GET *`

Response example

```json
{
  "error": "Route request.url not found"
}
```

### get sum of two numbers

`GET /sum`

Request example

`/sum?num1=20&num2=50`

Response example

```json
{
  "result": 70
}
```

Expected errors

- 404

```json
{
  "error": {
    "status": 400,
    "msg": "Not enough numbers for operations"
  }
}
```

### get index of a substring in a string

`GET /substr`

Request example

`/substr?str=apple&start=1&length=2`

Response example

```json
{
  "result": "pp"
}
```

Expected errors

- 400

```json
{
  "error": {
    "status": 400,
    "msg": "Not enough params"
  }
}
```

### get reversing letters in a string

`GET /reverse`

Request example

`/reverse?string=apple`

Response example

```json
{
  "result": "elppa"
}
```

Expected errors

- 400

```json
{
  "error": {
    "status": 400,
    "msg": "Invalid string"
  }
}
```
