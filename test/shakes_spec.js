const expect = require("chai").expect;
const request = require('request');
//"should recvie 200 /ok HTTP status code"
describe("Shakes", function(){
	it("should recvie a 200 / OK HTTP Status Code", function(done){
		request('http://ShakeItSpeare.com/api/sentence', function(error, response, body){
			expect(response.statusCode).to.eq(200);
			done();
		});
	});
	it("should have a sentence in the body", function(done){
		request('http://ShakeItSpeare.com/api/sentence', function(error, response, body){
			if (typeof(body) == "string") {
				body = JSON.parse(body);
			}
			console.log(body);
			expect(body.sentence).to.not.be.empty;
			done();
		});
	});
});

//should have a Title in the body