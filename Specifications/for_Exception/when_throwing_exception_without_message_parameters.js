import {Exception} from "../../Source/Exception";

const message = "My Exception";

class MyException extends Exception
{
    static get message() {
        return message;
    }
}

describe("when throwing exception without message parameters", () => {
    let result = null;

    try { MyException.throw(); } catch(e) { result = e }

    it("should have the expected message", () => result.should.equal(message));
});