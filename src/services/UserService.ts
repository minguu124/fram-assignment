import { Query } from "src/types/query.type";
import { IUser } from "src/types/user.type";
import { createQueryString } from "src/utils/queryString";
import BaseService from "./BaseService";
import { PATH } from "./RestClient";

class UserService extends BaseService {
  public createUser(req: IUser) {
    return this.post(PATH.USER, req);
  }

  public fetchUsers(query: Query) {
    const url = `${PATH.USER}?${createQueryString(query)}`;
    return this.get<any>(url).then((response) => response.data);
  }
}

export default new UserService();
