import {Exception} from "../../Source/Exception";

class MyException extends Exception
{
    static get message() {
        return "MyException";
    }
}

describe("when throwing without message parameters", () => {


    MyException.throw();

});