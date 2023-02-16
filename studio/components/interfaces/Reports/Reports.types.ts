import { ResponseError } from 'types'
import { DEFAULT_QUERY_PARAMS } from './Reports.constants'

export enum Presets {
  API = 'api',
  AUTH = 'auth',
  STORAGE = 'storage',
}

export interface QueryDataBase {
  isLoading: boolean
  error: string
}
export interface DbQueryData<T = any> extends QueryDataBase {
  data: T[]
  params: BaseReportParams
  logData?: never
}
export interface DbQueryHandler {
  runQuery: () => void
  setParams?: never
  changeQuery?: never
}
export type MetaQueryResponse = any & { error: ResponseError }

export type BaseReportParams = typeof DEFAULT_QUERY_PARAMS & { sql?: string } & unknown
export interface PresetConfig {
  title: string
  queries: BaseQueries<string>
}
export type BaseQueries<Keys extends string> = Record<Keys, ReportQuery>

export interface ReportQuery {
  queryType: 'db' | 'logs'
  sql: (filters: ReportFilterItem[]) => string
}

export interface StatusCodesDatum {
  timestamp: number
  status_code: number
  count: number
}
export interface PathsDatum {
  timestamp: number
  path: string
  query_params: string
  count: number
  sum: number
  method: string
  avg_origin_time: number
  quantiles: number[]
}

export interface ReportFilterItem {
  key: string
  value: string | number
  compare: 'matches' | 'is'
}
