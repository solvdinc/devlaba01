# BE, 1 practice

## Deadline 13.07.2021 (13 JUl 2021) 23:59 (GMT+3)

## Description
We need a simple NodeJS application which is a web-server. That server is to be a host of a simple web-page on / path and this web page needs to load a css and a js file back from the server from other paths. Well it’s pretty much like hosting static files by Nginx but we are going to do it using native NodeJS server without external libs either modules.

## Definition of done
* Backend application is developed using mostly NodeJS
* No npm or other external modules `/` packages are used (NodeJS built-in only, e.g. http)
* It has however package.json with start task that kicks off the app
* The app is a web server, the port is able to be customized in a config or env file
* No need to use complex infrastructure, no DB, no Docker, no proxy in front of NodeJS, no nodemon, pm2 etc…
* The app returns a web page on `GET /`
* The html page content can be got from a real file either be a string in the code
* The content of such a page can be anything, but it must be simple. However, a headline, some articles and pictures to be over there.
* The page loads main.css file from `GET /assets/main.css`
* The page loads main.js from `GET /assets/main.js`
* Both the files are real and placed somewhere on the filesystem of the host
* Any other requests one might perform to the web server would return `404` and a html content for that purpose.

