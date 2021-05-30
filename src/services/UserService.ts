import { createQueryString } from "src/utils/queryString";
import BaseService from "./BaseService";
import { PATH } from "./RestClient";

class UserService extends BaseService {
  public createUser(req: any) {
    return this.post(PATH.USER, req);
  }

  public fetchUsers(query: any) {
    const url = `${PATH.USER}?${createQueryString(query)}`;
    return this.get<any>(url).then((response) => response.data);
  }
}

export default new UserService();
