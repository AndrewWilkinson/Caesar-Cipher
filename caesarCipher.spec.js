import { caesarCipher } from "./caesarCipher.js";

describe("Caesar Cipher", () => {

    test("given '' and a key of 1: results in '' ", () => {
        const result = caesarCipher("", 1);
        expect(result).toBe("")
    })

    test("given 'abc' and a key of 0: results in 'abc' ", () => {
        const result = caesarCipher("abc", 0);
        expect(result).toBe("abc")
    })

    test("given 'a' and a key of 1: results in 'a' ", () => {
        const result = caesarCipher("a", 1);
        expect(result).toBe("b")
    })

    test("given the alphabet and a key of 1: results in alphabet starting at 'b' ending at 'a' ", () => {
        const result = caesarCipher("abcdefghijklmnopqrstuvwxyz", 1);
        expect(result).toBe("bcdefghijklmnopqrstuvwxyza")
    })

    test("given 'bcd' and a key of 1: results in 'cde' ", () => {
        const result = caesarCipher("bcd", 1);
        expect(result).toBe("cde")
    })

    test("given 'ABC' and a key of 1: results in 'BCD' ", () => {
        const result = caesarCipher("ABC", 1);
        expect(result).toBe("BCD")
    })

    test("given 'aBc' and a key of 1: results in 'bCd' ", () => {
        const result = caesarCipher("aBc", 1);
        expect(result).toBe("bCd")
    })

    //larger keys

    test("given 'abc' and a medium-sized key of 10: results in 'qrs' ", () => {
        const result = caesarCipher("abc", 10);
        expect(result).toBe("klm")
    })

    test("given 'abc' and a very large key of 26: results in 'abc' ", () => {
        const result = caesarCipher("abc", 26);
        expect(result).toBe("abc")
    })

    test("given 'abc' and a very large key of 27: results in 'bcd' ", () => {
        const result = caesarCipher("abc", 27);
        expect(result).toBe("bcd")
    })

    //negative keys

    test("given 'abc' and a negative key of -1: results in 'zab' ", () => {
        const result = caesarCipher("abc", -1);
        expect(result).toBe("zab")
    })

    test("given 'abc' and a very large negative key of -26: results in 'abc' ", () => {
        const result = caesarCipher("abc", -26);
        expect(result).toBe("abc")
    })

    test("given 'abc' and a very large negative key of -27: results in 'zab' ", () => {
        const result = caesarCipher("abc", -27);
        expect(result).toBe("zab")
    })

    //numbers

    test("given '123' and a key of 1: results in '234' ", () => {
        const result = caesarCipher("123", 1);
        expect(result).toBe("234")
    })

    test("given '890' and a key of 1: results in '901' ", () => {
        const result = caesarCipher("890", 1);
        expect(result).toBe("901")
    })

    test("given '123' and a key of 10: results in '123' ", () => {
        const result = caesarCipher("123", 0);
        expect(result).toBe("123")
    })

    test("given '123' and a negative key of -2: results in '901' ", () => {
        const result = caesarCipher("123", -2);
        expect(result).toBe("901")
    })

    //mixed inputs

    test("given 'a2C' and a key of 1: results in 'b3D' ", () => {
        const result = caesarCipher("a2C", 1);
        expect(result).toBe("b3D")
    })

    // ROLLING CAESAR CIPHER

    

})