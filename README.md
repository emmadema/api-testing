# Introduction

So now we have an idea of how to write tests for our Javascript code with Mocha and Chai.  There is one more type of test that will be really useful for our next project: the asynchronous kind.  Specifically, today we will introduce a couple ways to test a 3rd Party Web API.

## Choose your API

For this lab, we will model these tests with the OMDB API, but you should choose an API that you think will be helpful for your Project.  The structure of the tests will look the same, but you will need to use a different URL and change some of the details to match your API.

## Setup

Just like usual, you will need to create a new node project.  Don't forget to create a folder called `test` and put a `<yourAPIname>_spec.js` file inside it.  See if you can remember how to do this with no directions.

> **Hint:** you should use the `--save-dev` flag to install `mocha` and `chai` so they get saved into `package.json` (but only for your local machine). 

<!--

Then instructor runs this:

1. mkdir
2. npm init -y
3. npm install --save-dev mocha chai
4. mkdir test
5. touch omdb_spec.js

-->

- Make HTTP GET requests to familiar APIs
- Write tests to verify 200 OK requests
- Write tests to verify various parts of the request (body, params, etc)
- Make tests pass
