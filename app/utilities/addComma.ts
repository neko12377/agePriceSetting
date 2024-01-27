export default function addComma(number: string): string {
  // regex explanation:
  // ?= is a positive lookahead
  // ?! is a negative lookahead
  // \B is a non-word boundary
  // \d is a digit
  // {3} is a quantifier that matches exactly 3 digits
  // + is a quantifier that matches 1 or more of the preceding token
  // g is a global match
  let integer = "";
  let decimal = "";
  if (number.length === 0) return "";
  if (number.includes(".")) {
    integer = number.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    decimal = number.split(".")[1];
    return integer + "." + decimal;
  }
  integer = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return integer;
}