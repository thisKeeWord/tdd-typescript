import fs from "fs";
import writeFile from "./sum";

jest.mock("fs");

describe("writeFile", () => {
  it("should write the provided string to data.json", () => {
    const myString = "Hello, World!";
    writeFile(myString);
    expect(fs.writeFileSync).toHaveBeenCalledWith("data.json", myString);
  });
});
