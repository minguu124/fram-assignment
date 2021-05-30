import React, { Fragment, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "src/components/Loading";
import Paginator from "src/components/Paginator";
import Table, { Column } from "src/components/Table";
import { createUser, fetchUsers } from "src/states/users/actions";
import { getUsersData, getUsersState } from "src/states/users/selectors";
import { resetUsers } from "src/states/users/users.slice";
import { ICreateUser, IUser } from "src/types/user.type";
import CreateUserButton from "./CreateUserButton";
import "./styles.css";

const columns: Column[] = [
  { id: 0, prop: "name", label: "Name" },
  { id: 1, prop: "email", label: "Email" },
  { id: 2, prop: "position", label: "Position" }
];

const Users = () => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector(getUsersData);
  const { isLoading, total, page, limit } = useSelector(getUsersState);

  const onCreate = useCallback(
    (user: ICreateUser) => {
      dispatch(createUser(user));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchUsers({ page: 1 }));
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  const totalPage = useMemo(() => {
    if (!total || !limit) return 0;
    return Math.ceil(total / limit);
  }, [limit, total]);

  const onChangePage = useCallback(
    (page: number) => {
      dispatch(fetchUsers({ page }));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <div className="table-container">
        <h2 className="table-title">Employee</h2>
        <Table data={users} columns={columns} />
        <div className="table-footer">
          <CreateUserButton onCreate={onCreate} />
          <Paginator total={totalPage} current={page} onChange={onChangePage} />
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </Fragment>
  );
};

export default Users;
