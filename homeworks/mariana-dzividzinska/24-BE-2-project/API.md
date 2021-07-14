# API

## Calculate sum page

Get page for calculating sum

**URL:** `/sum`

**Method:** `GET`

### Success Response

HTML page

### Error Response

**When:** url is incorrect

**Request example:**

Get result of incorrect request, which describe in docs

## Calculate sum

Calculate sum of two numbers

**URL:** `/sum`

**Method:** `POST`

**Data constraints:**
Only numbers

**Request example:**

 All field are required

```json
{
  "num1": 10,
  "num2": -0.5
}
```

### Success Response

**Code:** `200 OK`

**Content example:** 
```json
{
  "sum": 9.5,
}
```

### Error Response

**When:** when one of parameters isn't a number

**Code:** `400 Bad Request`

**Content example:**
```json
{
  "error": {
    "code": 1,
    "msg": "Request data must be number"
  }
}
```
**OR**

**When:** when request body doesn't contains all needed fields

**Code:** `404 Not Found`

**Content example:**
```json
{
  "error": {
    "code": 2,
    "msg": "Request data must contain fields for  num1 and num2"
  }
}
```

## Index of page

Get page for getting index of substring in string

**URL:** `/indexOf`

**Method:** `GET`

### Success Response

HTML page

### Error Response

**When:** url is incorrect

**Request example:**

Get result of incorrect request, which describe in docs


## Index of

Get the index of the first occurrence of the specified string

**URL:** `/indexOf`

**Method:** `POST`


**Request example:** All field are required

```json
{
  "string": "hello world",
  "substring": "el"
}
```

### Success Response

**Code:** `200 OK`

**Content example:** 
```json
{
  "index": 1,
}
```

### Error Response

**When:** when request body doesn't contains all needed fields

**Code:** `404 Not Found`

**Content example:**
```json
{
  "error": {
    "code": 2,
    "msg": "Request data must contain fields for string and substring"
  }
}
```

## Reverse page

Get page for reverse string

**URL:** `/reverse`

**Method:** `GET`

### Success Response

HTML page

### Error Response

**When:** url is incorrect

**Request example:**

Get result of incorrect request, which describe in docs

## Reverse

Get reverse string

**URL:** `/reverse`

**Method:** `POST`


**Request example:** All field are required

```json
{
  "string": "1a2b3c",
}
```

### Success Response

**Code:** `200 OK`

**Content example:** 
```json
{
  "reverseString": "c3b2a1",
}
```

### Error Response

**When:** when request body doesn't contains all required fields

**Code:** `404 Not Found`

**Content example:**
```json
{
  "error": {
    "code": 2,
    "msg": "Request data must contain fields for string"
  }
}
```

## Incorrect request

**URL:** `different from urls in docs`

**Method:** `any`

**Response example:**

```json
{
  "error": "Route {url} not found"
}
```