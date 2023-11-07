import { create } from "zustand";
import cookies from "js-cookie";
import { json } from "stream/consumers";

type AuthState = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "User" | "ADMIN";
};

type AuthActions = {
  user: AuthState;
  token: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyToken: () => void;
  load: () => void;
};

async function login(email: string, password: string) {
  const response = await fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const data = await response.json();
  return data;
}

async function getUser(token: string) {
  const response = await fetch("http://localhost:4000/api/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

const useAuth = create<AuthActions>((set) => ({
  user: {} as AuthState,
  token: "",
  login: async (email, p) => {
    const loginRespone = await login(email, p);
    const userRespone = await getUser(loginRespone.token);
    const { id, createAt, updateAt, role, password, ...user } = userRespone;
    localStorage.setItem("user", JSON.stringify(userRespone));

    cookies.set("token", loginRespone.token, { expires: 1 });
    set({ user: user, token: loginRespone.token });
  },
  logout: () => {
    cookies.remove("token");
    localStorage.removeItem("user");
    set({ user: {} as AuthState, token: undefined });
  },
  verifyToken: async () => {
    const res = await fetch("http://localhost:4000/api/verify-token", {
      method: "POST",
      headers: {
        authorization: `Bearer ${cookies.get("token")}`,
      },
    });
    if (res.status === 401) {
      cookies.remove("token");
      localStorage.removeItem("user");
      set({ user: {} as AuthState, token: undefined });
    }
  },
  load: async () => {
    const token = cookies.get("token");
    if (token) {
      const user = await getUser(token);
      const { id, createAt, updateAt, role, password, ...rest } = user;
      localStorage.setItem("user", JSON.stringify(rest));
      set({ user: rest });
    }
  },
}));

export default useAuth;
