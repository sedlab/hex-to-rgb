const format = (string) => parseInt(string, 16);
const alpha = (string, formatString = format(string)) => string === "00" ? "0%" : formatString ? formatString === 255 ? void 0 : +(formatString / 255).toPrecision(2) * 100 + "%" : void 0;
const hexToRgb = (hex) => {
  try {
    hex = hex.replace("#", "");
    if (hex.length === 3 || hex.length === 4) {
      const { r, g, b, a } = { r: format(hex.substring(0, 1).repeat(2)), g: format(hex.substring(1, 2).repeat(2)), b: format(hex.substring(2, 3).repeat(2)), a: alpha(hex.substring(3, 4).repeat(2)) };
      return `rgb(${r} ${g} ${b}${a ? " / " + a : ""})`;
    } else if (hex.length === 6 || hex.length === 8) {
      const { r, g, b, a } = { r: format(hex.substring(0, 2)), g: format(hex.substring(2, 4)), b: format(hex.substring(4, 6)), a: alpha(hex.substring(6, 8)) };
      return `rgb(${r} ${g} ${b}${a ? " / " + a : ""})`;
    } else
      throw Error("\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 hex.");
  } catch (err) {
    return void 0;
  }
};

export { hexToRgb };
