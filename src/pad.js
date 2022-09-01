/* eslint-disable no-param-reassign */

export const padLeft = (val, len, char) => {
  while (val.length < len) {
    val = char + val;
  }

  return val;
};

export const padRight = (val, len, char) => {
  while (val.length < len) {
    val += char;
  }

  return val;
};

if (typeof window !== 'undefined') {
  window.$padLeft = padLeft;
  window.$padRight = padRight;
}
