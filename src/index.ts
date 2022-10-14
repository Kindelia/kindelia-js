import axios, { AxiosResponse } from 'axios'
import { AxiosRequestConfig } from 'axios'
import { Option } from 'rustie'

import * as T from './types'
export * as types from './types'

export type ApiResponse<T> =
  | {
      status: 'ok'
      data: T
    }
  | {
      status: 'error'
      error: string // TODO: rename to `message` or `msg`
    }

const fetch_api = async <T>(
  endpoint: string,
  base_url: string,
  cfg?: AxiosRequestConfig
): Promise<T> => {
  let axios_config: AxiosRequestConfig = {
    url: `${base_url}${endpoint}`,
    method: 'get', // default
    ...cfg,
  }
  const response: AxiosResponse<ApiResponse<T>> = await axios(axios_config)
  // TODO: handle response error

  let body = response.data
  if (body.status !== 'ok') {
    throw new Error(body.error)
  }
  return body.data
}

// Blocks

export const get_blocks = (base_url: string) =>
  fetch_api<T.BlockInfoJson[]>('/blocks', base_url)

export const get_block = (hex: T.BlockId, base_url: string) =>
  fetch_api<Option<T.BlockInfoJson>>(`/blocks/${hex}`, base_url)

// Functions

export const get_functions = (base_url: string) =>
  fetch_api<T.Name[]>('/functions', base_url)

export const get_function = (id: T.FunctionId, base_url: string) =>
  fetch_api<Option<T.FuncJson>>(`/functions/${id}`, base_url)

export const get_function_state = (id: T.FunctionId, base_url: string) =>
  fetch_api<T.TermJson>(`/functions/${id}/state`, base_url)

// Interact

export const post_interact_test = (code: string, base_url: string) =>
  fetch_api<T.BlockResultsJson[]>(`/code/test`, base_url, {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain',
    },
    data: code,
  })

export const post_interact_send = (code: string, base_url: string) =>
  fetch_api<any>(`/code/send`, base_url, {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain',
    },
    data: code,
  })