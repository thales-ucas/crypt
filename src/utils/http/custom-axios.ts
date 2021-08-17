import EventEmitter from "events";
import { IResponse } from "@/types/base";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Auth from "./auth";
import { HTTP_EVENT } from "./event";
export default class CustomAxios extends EventEmitter {
  _axios: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    super();
    this._axios = axios.create({
      // 创建axios实例
      validateStatus(status: number) {
        // 状态
        return status >= 200 && status < 300;
      },
      // withCredentials: true, // 跨域设置
      withCredentials: false, // 跨域设置
      timeout: 500000, // 设置超时
      ...config,
    });
    this.initInterceptors(); // 初始化拦截器
  }

  /**
   * 初始化拦截器
   */
  private initInterceptors() {
    // this._axios.defaults.headers.post['Content-Type'] =
    //   'application/x-www-form-urlencoded'; // 设置post请求头
    this._axios.defaults.headers.post["Content-Type"] = "application/json"; // 设置post请求头
    /**
     * 请求拦截器
     * 每次请求前，如果存在token则在请求头中携带token
     */
    this._axios.interceptors.request.use(
      // 请求拦截
      (config: AxiosRequestConfig) => {
        config.headers.common['access-token'] = Auth.get();
        return config;
      },
      (error: Error) => Promise.reject(error)
    );
    this._axios.interceptors.response.use(
      // 返回拦截
      (response: AxiosResponse) => {
        const { data } = response;
        if (data.code == 102) {
          this.emit(HTTP_EVENT.TOKEN_ERROR);
        }
        if (data.code != 0) {
          this.emit(HTTP_EVENT.ERROR, data.code);
        }
        return data;
      },
      (error) => {
        if (error.response) {
          const { status } = error.response;
          console.log(error);
          this.emit(HTTP_EVENT.STATUS_ERROR, status);
        }
        return Promise.reject(error);
      }
    );
  }

  public get(url: string, params: object = {}): Promise<IResponse> {
    return this._axios.get(url, { params });
  }

  public post(
    url: string,
    params: object | string | number = {}
  ): Promise<IResponse> {
    return this._axios.post(url, params);
  }
  /**
   * 是否有效
   */
  public isValid(): string | null {
    return Auth.get();
  }
  /**
   * 授权
   * @param {string} token 令牌
   */
  public authorize(token: string): void {
    Auth.set(token);
  }
  /**
   * 退出登录
   * @param
   */
  public logout(): void {
    Auth.del();
  }
}
