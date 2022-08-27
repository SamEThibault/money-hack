export const numbersOnly = (text) => {
  let number = new RegExp(/[^0-9]/g);
  if (!number.test(text)) return text;
  return text.slice(0, -1);
};
