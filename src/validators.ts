import { HashHex } from "./types";

export const checkHashHexValid = (hashHex: string): hashHex is HashHex =>
  new RegExp("^(0x)?[0-9a-f]{64}$", "i").test(hashHex);
