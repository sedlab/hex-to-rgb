# hex-to-rgb

Библиотека для конвертирования цвета HEX в RGB.

## Установка

`npm i -s dsedinkin/hex-to-rgb#latest` или `yarn add dsedinkin/hex-to-rgb#latest`

## Использование

> ES6

```js
import { hexToRgb } from "hex-to-rgb";
```

> ES5

```js
const { hexToRgb } = require("hex-to-rgb");
```

## Пример

```js
console.log(hexToRgb("#f09"), "rgb(255 0 153)");
console.log(hexToRgb("#F09"), "rgb(255 0 153)");
console.log(hexToRgb("#ff0099"), "rgb(255 0 153)");
console.log(hexToRgb("#FF0099"), "rgb(255 0 153)");

console.log(hexToRgb("#3a30"), "rgb(51 170 51 / 0%)");
console.log(hexToRgb("#3A3F"), "rgb(51 170 51)");
console.log(hexToRgb("#33aa3300"), "rgb(51 170 51 / 0%)");
console.log(hexToRgb("#33AA3380"), "rgb(51 170 51 / 50%)");
```