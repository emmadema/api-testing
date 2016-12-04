var expect = require('chai').expect;
var request = require('request');

var URL = 'http://www.omdbapi.com/?t=frozen';

describe("OMDB", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(URL, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it("should return 200 - OK", function() {
		expect(apiResponse.statusCode).to.eq(200);
	});

	it("should have a Title in the body", function() {
	  if (typeof(apiBody) == "string") {
	  	apiBody = JSON.parse(apiBody);
	  }
		expect(apiBody.Title).to.not.be.empty;
	});
});