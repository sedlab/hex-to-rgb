type THexToRgbValue = string;
type THexToRgb = string | undefined;

declare const hexToRgb: (hex: THexToRgbValue) => THexToRgb;

export { hexToRgb };
