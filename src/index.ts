import * as endpoints from "./endpoints";
import * as types from "./types";
import * as validators from "./validators";
import * as name from "./name";

export default {
  ...endpoints,
  ...validators,
  ...types,
  ...name,
};
