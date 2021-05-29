import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "src/components/Loading";
import Paginator from "src/components/Paginator";
import Table, { Column } from "src/components/Table";
import { fetchUsers } from "src/states/users/actions";
import { getUsersData, getUsersState } from "src/states/users/selectors";
import { resetUsers } from "src/states/users/users.slice";
import { IUser } from "src/types/user.type";
import "./styles.css";

const columns: Column[] = [
  { id: 0, prop: "name", label: "Name" },
  { id: 1, prop: "email", label: "Email" },
  { id: 2, prop: "position", label: "Position" }
];

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, total, page, limit } = useSelector(getUsersState);
  const users: IUser[] = useSelector(getUsersData);

  useEffect(() => {
    dispatch(fetchUsers({ page: 1 }));
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  const totalPage = useMemo(() => {
    if (!total || !limit) return 0;
    return total / limit;
  }, [limit, total]);

  const onChangePage = useCallback(
    (page: number) => {
      dispatch(fetchUsers({ page }));
    },
    [dispatch]
  );

  return (
    <div className="table-container">
      <Table data={users} columns={columns} />
      <Paginator total={totalPage} current={page} onChange={onChangePage} />
      <Loading isLoading={isLoading} />
    </div>
  );
};

export default Users;
