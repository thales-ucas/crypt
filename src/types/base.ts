export interface IApiUrls { // apiurl枚举
  [porpName:string]:string;
}
export interface IResponse { // 返回状态
  code: string; // 错误代码
  desc: string; // 描述
  success: boolean; // 是否成功
  data?: any; // 数据
}
export interface IPagination { // 分页
  endRow: number;
  hasNextPage: false;
  hasPreviousPage: false;
  isFirstPage: true;
  isLastPage: true;
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: number[];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}
export const INIT_PAGE_NUM = 1; // 初始页面
export const INIT_PAGE_SIZE = 10; // 分页

export enum API_STATUS { // api数据状态
  NORMAL, // 正常
  LOADING = 1001, // 加载中
  BOTTOM = 1101, // 加载完所有页面
  ERROR = 2101 // 出错
}
