import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Option } from "rustie";

import * as T from "./types";
export * as types from "./types";

type KindeliaPromise<T> = Promise<AxiosResponse<T>>;

const publicAPI = async <T>(config: AxiosRequestConfig): KindeliaPromise<T> => {
  return axios(config);
};

export const getStats = async (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<any> =>
  publicAPI({
    ...requestConfig,
    baseURL: `${nodeURL}/stats`,
  });

export const getBlocks = (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T.BlockInfoJson[]> =>
  publicAPI<T.BlockInfoJson[]>({
    ...requestConfig,
    baseURL: `${nodeURL}/blocks`,
  });

export const getBlock = (
  { nodeURL, blockHashHex }: { nodeURL: string; blockHashHex: T.HashHex },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T.BlockInfoJson> =>
  publicAPI<Option<T.BlockInfoJson>>({
    ...requestConfig,
    baseURL: `${nodeURL}/blocks/${blockHashHex}`,
  });

export const getFunctions = (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T.Name[]> =>
  publicAPI<T.Name[]>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions`,
  });

export const getFunction = (
  { nodeURL, functionId }: { nodeURL: string; functionId: T.FunctionId },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T.FuncJson> =>
  publicAPI<Option<T.FuncJson>>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions/${functionId}`,
  });

export const getFunctionState = (
  { nodeURL, functionId }: { nodeURL: string; functionId: T.FunctionId },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T.TermJson> =>
  publicAPI<T.TermJson>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions/${functionId}/state`,
  });

export const sendInteract = <T>(
  {
    nodeURL,
    code,
    isTest,
  }: {
    nodeURL: string;
    code: string;
    isTest: boolean;
  },
  requestConfig?: AxiosRequestConfig
): KindeliaPromise<T> =>
  publicAPI<T>({
    ...requestConfig,
    baseURL: `${nodeURL}/code` + (isTest ? "/test" : ""),
    method: "POST",
    data: code,
  });
