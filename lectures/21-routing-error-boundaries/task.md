# Routing, Error Boundaries, Patterns and Testing

## Deadline 20 June 2021 23:59 (GMT+3)

[Template](https://www.figma.com/file/imeoRMmQXxl24ciWikL2Gj/Tile-Project-Error-Boundary) 
(You have to sign up to see the styles. Let me know if you have any issues.)

Avatar app. Use https://laba-backend.herokuapp.com/tile. Design [here](https://www.figma.com/file/imeoRMmQXxl24ciWikL2Gj/Tile-Project-Error-Boundary). Assets are [here](https://drive.google.com/drive/folders/15MgtcwNcqjr-ShHs1RxH9POR-xPiVzxR?usp=sharing).

The updated UI contains of PENDING state which represent that the request for the new tile has been executed. Please note that the new tile should appear on the screen after the request has been successfully RESOLVED. In other words, "Add New Tile" button should have two states: IDLE and PENDING. It should be impossible to click on the "Add New Tile" button if the request in the PENDING state. If the request was REJECTED show the error modal. There is a 25% chance that the request will fail and 25% chance that request will return unexpected data structure in the response.

Expected response:

```
{
  avatar: string;
}
```

Unexpected response: 

```
{
  avatar: {
    height: number;
    url: string;
    size: string;
    width: number;
  }
}
```

Please pass `avatar` string or object directly into `return` statement and catch the error using error boundary if you have received the object (unexpected result).

*Implementing recovery strategy for the tile is advanced and optional.*

Good Luck!