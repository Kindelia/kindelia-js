import * as T from "./types";
import { Name } from "./types";

export function _name_to_num(name: Name) {
  // TODO
}

export function num_to_name(num: bigint) {
  if (num < 0) {
    throw new Error("Source number must be non-genative on conversion to Name");
  }
  let letters = [];
  while (num > 0) {
    let code = Number(num % 64n);
    let c = CODE_TO_CHAR[code];
    letters.push(c);
    num = num >> 6n;
  }
  return letters.reverse().join("");
}

export const CHAR_TO_CODE: { [x: string]: bigint } = {
  ".": 0n,
  "0": 1n,
  "1": 2n,
  "2": 3n,
  "3": 4n,
  "4": 5n,
  "5": 6n,
  "6": 7n,
  "7": 8n,
  "8": 9n,
  "9": 10n,
  A: 11n,
  B: 12n,
  C: 13n,
  D: 14n,
  E: 15n,
  F: 16n,
  G: 17n,
  H: 18n,
  I: 19n,
  J: 20n,
  K: 21n,
  L: 22n,
  M: 23n,
  N: 24n,
  O: 25n,
  P: 26n,
  Q: 27n,
  R: 28n,
  S: 29n,
  T: 30n,
  U: 31n,
  V: 32n,
  W: 33n,
  X: 34n,
  Y: 35n,
  Z: 36n,
  a: 37n,
  b: 38n,
  c: 39n,
  d: 40n,
  e: 41n,
  f: 42n,
  g: 43n,
  h: 44n,
  i: 45n,
  j: 46n,
  k: 47n,
  l: 48n,
  m: 49n,
  n: 50n,
  o: 51n,
  p: 52n,
  q: 53n,
  r: 54n,
  s: 55n,
  t: 56n,
  u: 57n,
  v: 58n,
  w: 59n,
  x: 60n,
  y: 61n,
  z: 62n,
  _: 63n,
};

export const CODE_TO_CHAR: string[] = Object.entries(CHAR_TO_CODE).reduce(
  (acc, item) => {
    const [ch, code] = item;
    acc[Number(code)] = ch;
    return acc;
  },
  [] as string[]
);
