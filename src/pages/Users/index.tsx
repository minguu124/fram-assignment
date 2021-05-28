import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "src/states/users/actions";
import { getUsersState } from "src/states/users/selectors";
import { resetUsers } from "src/states/users/users.slice";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(getUsersState);
  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  return <div></div>;
};

export default Users;
