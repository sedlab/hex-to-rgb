import { hexToRgb } from "./index";

test("hexToRgb", () => {
    expect(hexToRgb("#f09")).toEqual("rgb(255 0 153)");
    expect(hexToRgb("#F09")).toEqual("rgb(255 0 153)");
    expect(hexToRgb("#ff0099")).toEqual("rgb(255 0 153)");
    expect(hexToRgb("#FF0099")).toEqual("rgb(255 0 153)");
    expect(hexToRgb("#3a30")).toEqual("rgb(51 170 51 / 0%)");
    expect(hexToRgb("#3A3F")).toEqual("rgb(51 170 51)");
    expect(hexToRgb("#33aa3300")).toEqual("rgb(51 170 51 / 0%)");
    expect(hexToRgb("#33AA3380")).toEqual("rgb(51 170 51 / 50%)");
});