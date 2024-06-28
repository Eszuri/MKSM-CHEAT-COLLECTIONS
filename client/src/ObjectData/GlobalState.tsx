import { create } from "zustand";

interface UserType {
    name: string;
    email: string;
    picture: string;
    isLoggin: boolean;
    fetchAgain: boolean;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPicture: (picture: string) => void;
    setLoggin: (isLogin: boolean) => void;
    setFetchAgain: (fetchAgain: boolean) => void;
}

const getUserGlobal = create<UserType>((set) => ({
    name: "",
    email: "",
    picture: "",
    isLoggin: false,
    fetchAgain: false,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPicture: (picture) => set({ picture }),
    setLoggin: (isLoggin) => set({ isLoggin }),
    setFetchAgain: (fetchAgain) => set({ fetchAgain }),
}));

export { getUserGlobal as userGlobal };