import { IUser } from "src/types/user.type";
import BaseService from "./BaseService";
import { PATH } from "./RestClient";

class UserService extends BaseService {
  public createUser(req: IUser) {
    return this.post(PATH.USER, req);
  }

  public fetchUsers() {
    return this.get<any>(PATH.USER);
  }
}

export default new UserService();
