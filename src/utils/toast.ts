import { toast } from "react-toastify";

class Toaster {
  public success(message: string) {
    return toast(message, { type: toast.TYPE.SUCCESS });
  }

  public error(message: string) {
    return toast(message, { type: toast.TYPE.ERROR });
  }
}

export default new Toaster();
