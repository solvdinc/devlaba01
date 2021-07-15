# API

## Exceptions

- 400 Bad request
- 404 Not Found

## Home

### Request example

`GET /`

### Response example

```json
{
  "message": "It's home page"
}
```

## Not Found

### Request example

`GET /*`

### Response example

```json
{
 "error": "Not found req.url",
  "status": 404
}
```

## Sum

### Request example

`GET /sum?a=4&b=3`

### Response example

```json
{
  "result": 7,
  "status": 200
}
```

### Expected errors

- 400

```json
{
  "error": "Invalid data. Please enter 2 numbers",
  "status": 400
}
```
## Substring

### Request example

`GET /substr?string=create&from=4&length=3`

### Response example

```json
{
  "result": "ate",
  "status": 200
}
```

### Expected errors

- 400

```json
{
  "error": "Invalid data. Not enough params",
  "status": 400
}
```

## Reverse

### Request example

`/reverse?string=testing`

### Response example

```json
{
  "result": "gnitset",
  "status": 200
}
```

### Expected errors

- 404

```json
{
  "error": "No data entered",
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