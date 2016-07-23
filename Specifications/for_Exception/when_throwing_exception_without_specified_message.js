import {Exception} from "../../Source/Exception";

class MyException extends Exception
{
}

describe("when throwing exception without message parameters", () => {
    let result = null;

    try { MyException.throw(); } catch(e) { result = e }

    it("should have the base types message", () => result.should.equal(Exception.message));
});