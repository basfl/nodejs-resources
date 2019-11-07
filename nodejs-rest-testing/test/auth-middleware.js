const authMiddleware = require('../middleware/is-auth');
const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

describe("Auth middleware", () => {

    it("should throw error if no authoraization header is present", () => {
        const req = {
            get: (headerName) => {
                return null;
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => { })).to.Throw('Not authenticated.');
    });
    it("should throw error if  authoraization header is only one string", () => {
        const req = {
            get: (headerName) => {
                return "xyz";
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => { })).to.Throw();
    });
    it("should throw error if  token can not be verified", () => {
        const req = {
            get: (headerName) => {
                return "bearer xyz";
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => { })).to.Throw();
    });

    it("should yield userId after decoding the token", () => {
        const req = {
            get: (headerName) => {
                return "bearer xyz123455";
            }
        };
        sinon.stub(jwt, "verify");
        jwt.verify.returns ({ usreId: "abc" });
        // jwt.verify = () => {
        //     return { userId: "abc" }
        // }
        authMiddleware(req, {}, () => { });
        expect(req).to.have.property("userId");
        jwt.verify.restore();
    });


})

