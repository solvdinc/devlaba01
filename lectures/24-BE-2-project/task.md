# BE, 2 practice

## Deadline 15.07.2021 (15 JUl 2021) 23:59 (GMT+3)

## Description
We need a NodeJS application which is a web-server. The server to be serve us with APIs. Three of them are: sum of two numbers, search an index of substring in a string, reversing a given string.
The constructed end points must be well described in a doc (.md file is ok), and designed as REST-like interfaces.
The code to be clean enough.
Any unexpected HTTP call must reply with 404.
It’s going to serve using native NodeJS server without external libs or modules.

## Definition of done
* Backend application is developed using mostly NodeJS
* No npm or other external modules / packages are used if else not allowed
* It has however package.json with start task that kick off the app
* The app is a web server, the port is able to be customized in a config or env file, dotenv can be used
* No need to use complex infrastructure, no DB, no Docker, no proxy in front of NodeJS, no nodemon, pm2 etc…
* App, FrontController, Router, Logger... infrastructure is implemented
* Next API end-points to be documented (.md file is ok) and implemented:
* Sum of two numbers
* Index of a substring in a string
* Reversing letters in a string
* Ways to pass the input are on you
* Routes are described in an unified way
* Each route has a respective function (controller and action) to be called
* Any other requests one might perform to the web server would return 404 response and JSON with {“error”: “Route … not found”}
* \* Extra: implement that one of end-points spawns a sub process that runs business logic, receives the input by a message or arguments or stdin and returns a response to the parent process in a respective way. It could be another script e.g., sum.js
