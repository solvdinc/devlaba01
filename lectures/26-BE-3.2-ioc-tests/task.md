# BE, 3 practice

## Deadline 23.07.2021 (23 JUl 2021) 23:59 (GMT+3)

## Description
A simple API app is to be made. Two REST resources: posts and comments, whereas comments are always tied to an existing post. Obviously all CRUD to be implemented. As a database to store, use Mongodb. No authorization required.

## Definition of done
* No libs are used beside I mentioned if one is allowed.
* A simple routing, controllers, actions, service layers are implemented.
* Two REST resources: posts and comments are developed.
* Full CRUD is supported for them.
* Documentation is added (.md wiki is ok), expected input, output and errors are well described.
* A post can have no comments, a comment must always have a post and never more than one.
* No ORM/QB (like Mongoose) are used, just the driver. (https://www.npmjs.com/package/mongodb)
* The database credentials are in a separate place (.env file) that isn't in git, but an example to be added
* Jest and supertest are used in order to cover different cases by feature tests:
  * if one removes posts, its comments are expected to be removed
  * if one tries to add a comment to a not existing post 404 to be returned … etc
* If you have a feeling the installation and configuration of your app is not obvious, please add a readme.md file with instructions
* Allowed libs: dotenv, glob, jest, supertest, mongodb
