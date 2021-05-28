import api from "./RestClient";

export default class BaseService {
  public get<T>(url: string, config?: any): Promise<T> {
    return api.get(url, config);
  }

  public post<T>(
    url: string,
    body?: object | string,
    config?: any
  ): Promise<T> {
    return api.post(url, body, config);
  }
}
