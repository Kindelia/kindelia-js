import * as endpoints from "./endpoints";
export * as types from "./types";
import * as validators from "./validators";

export default {
  ...endpoints,
  ...validators,
};
