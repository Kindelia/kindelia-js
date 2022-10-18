import { HashHex } from "./types";

export const isHaxHexValid = (hash: string): hash is HashHex =>
  new RegExp("^(0x)?[0-9a-f]{64}$", "i").test(hash);