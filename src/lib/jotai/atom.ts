import { atom } from "jotai";

const initialUserState: User = {} as User;
export const userAtom = atom(initialUserState);
export const editModalAtom = atom(false);
export const editTodoAtom = atom("");
