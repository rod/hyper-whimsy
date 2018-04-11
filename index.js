const text = '#b3b0d6';
const black = '#29283b';
const red = '#ef6487';
const green = '#5eca89';
const yellow = '#fdd877';
const blue = '#65aef7';
const magenta = '#aa7ff0';
const cyan = '#43c1be';
const white = '#ffffff';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: text,
    foregroundColor: text,
    backgroundColor: black,
    borderColor: black,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
  });
}
