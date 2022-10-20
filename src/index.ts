import * as endpoints from "./endpoints";
import * as types from "./types";
import * as validators from "./validators";

export default {
  ...endpoints,
  ...validators,
  ...types,
};
