# API

## End-points

### start page

`GET /`

Response example

`home reached`

### page not found

`GET **404`

Response example

```html
<body style="background-color: crimson;">
  <h1 style="color: white; text-align: center; vertical-align: center;">
    PAGE NOT FOUND
  </h1>
</body>
```

Also we create JSON file with error like

```json
{
  "error": "Route {url pathname} not found"
}
```

### get sum of two numbers

`GET /sum`

Request example

`/sum?20&50`

Response example

```json
{
  "num1": 20,
  "num2": 50,
  "sum": 70
}
```

```html
<h1>Sum: 20 + 50 = 70</h1>
```

### get index of a substring in a string

`GET /substr`

Request example

`/substr?apple&a`

Response example

```json
{
  "word": "apple",
  "char": "a",
  "index": "No matches or index"
}
```

```html
<h1>Word: apple</h1>
<h1>Char: a</h1>
<h1>Index: 1</h1>
```

### get reversing letters in a string

`GET /reverse`

Request example

`/reverse?apple`

Response example

```json
{
  "string": "apple",
  "reverse": "elppa"
}
```

```html
<h1>String: apple</h1>
<h1>Reverse string: elppa</h1>
```
