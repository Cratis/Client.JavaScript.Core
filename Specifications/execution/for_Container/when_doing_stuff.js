import {Container} from "../../../Source/execution/Container";

describe("when doing stuff", () => {
   var container = new Container();
   
   container.sayHello();
      
   it("should do stuff", () => {
       expect(true).toBe(true);
   });
});
