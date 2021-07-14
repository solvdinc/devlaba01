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
  "error": "Router ${req.url} not found"
}
```

## Sum

### Request example

'/sum?num1=12&num2=7'

### Response example

```json
{
  "result": 19
}
```

### Error example

- 404

```json
{
    { "error": "Pls enter all numbers" }
}
```

## Reverse

### Request example

'/reverse?input=hello'

### Response example

```json
{
  "result": "olleh"
}
```

### Error example

- 404

```json
{
    { "error": "Pls enter yr string" }
}
```

- 400

```json
{
    { "error": "Invalid data" }
}
```

## Substring

### Request example

'/sum?input=learning&start=1&length=2'

### Response example

```json
{
  "result": "ea"
}
```

### Error example

- 404

```json
{
    { "error": "Enter all parameters" }
}
```

- 400

```json
{
    { "error": "Invalid data" }
}
```

## Used packeges

- dotenv(https://www.npmjs.com/package/dotenv)
