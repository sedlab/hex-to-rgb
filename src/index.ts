import { TFormatValue, TFormat, TAlphaValue, TAlpha, THexToRgbValue, THexToRgb } from "./type";

const format = (string: TFormatValue): TFormat => parseInt(string, 16);

const alpha = (string: TAlphaValue, formatString = format(string)): TAlpha => string === "00" ? "0%" : (formatString ? formatString === 255 ? undefined : (+(formatString / 255).toPrecision(2) * 100) + "%" : undefined);

export const hexToRgb = (hex: THexToRgbValue): THexToRgb => {
  try {
    hex = hex.replace("#", "");
    if (hex.length === 3 || hex.length === 4) {
      const { r, g, b, a } = { r: format(hex.substring(0, 1).repeat(2)), g: format(hex.substring(1, 2).repeat(2)), b: format(hex.substring(2, 3).repeat(2)), a: alpha(hex.substring(3, 4).repeat(2)) };
      return `rgb(${r} ${g} ${b}${a ? " / " + a : ""})`;
    } else if (hex.length === 6 || hex.length === 8) {
      const { r, g, b, a } = { r: format(hex.substring(0, 2)), g: format(hex.substring(2, 4)), b: format(hex.substring(4, 6)), a: alpha(hex.substring(6, 8)) };
      return `rgb(${r} ${g} ${b}${a ? " / " + a : ""})`;
    } else throw Error("Недопустимый формат hex.");
  } catch (err) {
    // console.error("lib hexToRgb: ", err);
    return undefined;
  };
};
