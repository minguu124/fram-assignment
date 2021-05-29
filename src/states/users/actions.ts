import { createAction } from "@reduxjs/toolkit";
import { Query } from "src/types/query.type";
import { IUser } from "src/types/user.type";

export const fetchUsers = createAction<Query>("FETCH_USERS");

export const createUser = createAction<IUser>("CREATE_USER");
