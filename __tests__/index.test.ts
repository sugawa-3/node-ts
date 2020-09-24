// import {hello} from "../index";
const index = require('../src/index');

describe("@/indexのテスト", () => {
    it("テスト", () => {
        expect(index.hello("World")).toBe("Hello, World!");
        expect(index.hello("World")).toBe("Hello");
    });
});