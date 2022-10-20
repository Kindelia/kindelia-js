import axios, { AxiosRequestConfig, AxiosPromise, Axios } from "axios";
import { Option } from "rustie";

import * as T from "./types";
export * as types from "./types";

const publicAPI = async <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  return axios(config);
};

export const getStats = async (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.StatementInfo> =>
  publicAPI<T.StatementInfo>({
    ...requestConfig,
    baseURL: `${nodeURL}/stats`,
  });

export const getBlocks = (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.BlockInfoJson[]> =>
  publicAPI<T.BlockInfoJson[]>({
    ...requestConfig,
    baseURL: `${nodeURL}/blocks`,
  });

export const getBlock = (
  { nodeURL, blockHashHex }: { nodeURL: string; blockHashHex: T.HashHex },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.BlockInfoJson> =>
  publicAPI<Option<T.BlockInfoJson>>({
    ...requestConfig,
    baseURL: `${nodeURL}/blocks/${blockHashHex}`,
  });

export const getFunctions = (
  { nodeURL }: { nodeURL: string },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.Name[]> =>
  publicAPI<T.Name[]>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions`,
  });

export const getFunction = (
  { nodeURL, functionName }: { nodeURL: string; functionName: T.FunctionName },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.FuncJson> =>
  publicAPI<Option<T.FuncJson>>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions/${functionName}`,
  });

export const getFunctionState = (
  { nodeURL, functionName }: { nodeURL: string; functionName: T.FunctionName },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.TermJson> =>
  publicAPI<T.TermJson>({
    ...requestConfig,
    baseURL: `${nodeURL}/functions/${functionName}/state`,
  });

export const sendInteract = (
  {
    nodeURL,
    code,
    isTest,
  }: {
    nodeURL: string;
    code: string;
    isTest?: boolean;
  },
  requestConfig?: AxiosRequestConfig
): AxiosPromise<T.BlockResultsJson[]> =>
  publicAPI<T.BlockResultsJson[]>({
    ...requestConfig,
    baseURL: `${nodeURL}/code/run` + (isTest ? "/test" : ""),
    method: "POST",
    data: code,
  });
  