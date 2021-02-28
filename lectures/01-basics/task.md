# Postman practice

You should create a user on the server and set your name and phone number.

I’m not giving you any information about fields I just say URLs to API endpoints:

**Server URL**: https://laba-solvd-requests.herokuapp.com/

The server has the following API endpoints:

- **POST**: `/register/`
- **POST**: `/login/`
- **GET**: `/users/`
- **PATCH**: `/users/:id/`
- **GET**: `/users/:id/`

The server has Bearer Token authorization. You have to use JWT token that you receive from the `/login/` endpoint.

In the end I want to see information about you. E.g.

```json
{
  "id": 1,
  "email": "dmishin@solvd.com",
  "name": "Dmitry Mishin",
  "phone": "+375291168308"
}
```
