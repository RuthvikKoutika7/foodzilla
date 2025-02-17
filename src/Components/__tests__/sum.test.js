import { sum } from "../sum"

test("Sum function testing for checking my config setUp ", () =>{
    const result = sum(2,5);

    // Assertion
    expect(result).toBe(7);
});