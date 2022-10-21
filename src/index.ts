export * as types from "./types";
export * as name from "./name";
export * as endpoints from "./endpoints";
export * as validators from "./validators";
export * as util from "./util";

import * as types from "./types";
import * as name from "./name";
import * as endpoints from "./endpoints";
import * as validators from "./validators";
import * as util from "./util";

export default {
  ...endpoints,
  ...validators,
  ...types,
  ...name,
  ...util,
};

// import "./example"
