# API

## Exceptions

- 400 Bad request
- 404 Not Found

## Home

### Request example

'/'

### Response example

```json
{
  "message": `Hello user, it's home page`
}
```

## Not Found

### Request example

'\*'

### Response example

```json
{
 "error": `Router ${req.url} not found`, "status": 404
}
```

## Sum

### Request example

'/sum?num1=12&num2=7'

### Response example

```json
{
  "result": 19,
  "status": 200
}
```

### Error example

- 404

```json
{
  "error": "Pls enter all numbers",
  "status": 404
}
```

## Reverse

### Request example

'/reverse?input=hello'

### Response example

```json
{
  "result": "olleh",
  "status": 200
}
```

### Error example

- 404

```json
{
  "error": "Pls enter yr string",
  "status": 404
}
```

- 400

```json
{
  "error": "Invalid data",
  "status": 400
}
```

## Substring

### Request example

'/sum?input=learning&start=1&length=2'

### Response example

```json
{
  "result": "ea",
  "status": 200
}
```

### Error example

- 404

```json
{
  "error": "Enter all parameters",
  "status": 404
}
```

- 400

```json
{
    "error": "Invalid data",
    "status": 400
}
```

## Used packages

- dotenv(https://www.npmjs.com/package/dotenv)
