# Environment Part 2

## Deadline 05.13.2021 (13 May 2021) 23:59 (GMT+3)

Prepare webpack config for development and production modes. I need **3 scripts**: `npm start`, `npm run build` and `npm run build:dev`.

* `npm start` – **development mode** + **live server** that should update your page on change + **sourcemaps** for JS files
* `npm run build` – **production mode** with compressed JS/CSS files **without sourcemaps**
* `npm run build:dev` – **development mode** with **sourcemaps** for JS files

Here’s a CV template again ;)

Right now you have a page of your CV. You need to create a menu with 2 pages: your CV and additional page (header/footer should be the same on each page).

## Definition of done

* You need to **use any template engine** for your templates (e.g. jade, ejs, page, pug, etc.).
* You need to create **2 pages**: CV page + additional page with any content but it should use **the same header/footer**
* Project should have **3 scripts**: `npm start`, `npm run build` and `npm run build:dev`
  * `npm start` – development mode + live server that should update your page on change + sourcemaps for JS files
  * `npm run build` – production mode with compressed JS/CSS files without sourcemaps
  * `npm run build:dev` – development mode with sourcemaps for JS files
* Prepare "drawer"/"sidenav" logic for mobile menu. [material angular example](https://stackblitz.com/angular/gddjqjmpabv?file=src%2Fapp%2Fsidenav-backdrop-example.ts) (click toggle, you can configure your menu the way you want), [material react example](https://codesandbox.io/s/64ulq) (click on the left or the right button). It means that you need to organize JS logic for your project. Try to make the most scalable solution. Try to make smth interesting up ;)

## Advanced

* Do you remember the modal window from [the advanced section of the lecture 4](https://github.com/qaprosoft/devlaba01/blob/master/lectures/04-html-css-2/task.md)? Try to implement the modal. Create extra button somewhere that should open the modal.
* Try to implement [lazy loading](https://webpack.js.org/guides/lazy-loading/) for the previous task. The content of the modal window shoud **start loading after the button is clicked**
