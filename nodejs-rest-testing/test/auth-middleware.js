const authMiddleware = require('../middleware/is-auth');
const expect = require('chai').expect;

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
        authMiddleware(req, {}, () => { });
        expect(req).to.have.property("userId");
    });


})

