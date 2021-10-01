const bg = '#29283b';
const fg = '#b3b0d6';
const black = '#535178';
const red = '#ef6487';
const green = '#5eca89';
const yellow = '#fdd877';
const blue = '#65aef7';
const magenta = '#aa7ff0';
const cyan = '#43c1be';
const white = '#ffffff';
const select = "#424865";

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: fg,
    foregroundColor: fg,
    backgroundColor: bg,
    borderColor: black,
    selectionColor: select,
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
    css: `
      ${config.css || ''}

      .hyper_main {
        border-width: 0px;
      }
    `
  });
}