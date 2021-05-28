import { createAction } from "@reduxjs/toolkit";
import { IUser } from "src/types/user.type";

export const fetchUsers = createAction<void>("FETCH_USERS");

export const createUser = createAction<IUser>("CREATE_USER");
