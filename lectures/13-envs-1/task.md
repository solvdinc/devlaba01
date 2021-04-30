# CSS Preprocessors & Environment Part 1

## Deadline 05.03.2021 (03 May 2021) 23:59 (GMT+3)

## Description

Remember your CV project?) You need to prepare a gulp task for the CV. This gulp task should build scss or stylus code.

So, I need a project that has 2 scripts: `npm run build` and `npm start`. When you run `npm start` there should be a [watcher](https://gulpjs.com/docs/en/api/watch/) for scss or stylus files.

`npm run build` should make compressed CSS files.

So, what about your CV? Rewrite your CSS styles into `scss` or `stylus`.

## Definition of done

* You need to init an npm project and fill the data as accurately as possible (title, description, repo, keywords, etc.)
* There should be a `scss` or a `stylus` file for your CV. You need to rewrite your CSS styles
* A project with 2 scripts: `npm run build` and `npm start`
  * `npm run build` builds compressed CSS
  * `npm start` monitors scss or stylus files

## Advanced

* npm start should run development server and CSS files should have sourcemap
