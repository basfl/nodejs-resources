const expect = require('chai').expect;
const sinon = require('sinon');
const User = require("../models/user");
const authController = require('../controllers/auth');
describe("auth contoller - login", () => {

    it("should throw error  with code 500 if  accessing datatbase failed!", (done) => {
        sinon.stub(User, "findOne");
        User.findOne.throws();
        const req = {
            body: {
                email: "test@test",
                password: "tester"
            }
        };
        authController.login(req, {}, () => { }).then(result => {
            // console.log("---", result);
            expect(result).to.be.an("error");
            expect(result).to.have.property("statusCode", 500);
            done();

        })
        // expect(authController.login)
        User.findOne.restore();
    });
})