import {Container} from "/Source/execution/Container";

describe("when doing stuff", () => {
   var container = new Container();
   
   var result = container.sayHello();
   
   console.log("FGromfasd");
      
   it("should do stuff", () => {
       expect(result).toBe(true);
   });
});
