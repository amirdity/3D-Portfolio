import { createContext, ReactNode, useReducer } from "react";

export const AuthContext = createContext<ContextValue | null>(null);
interface AuthContextProvider {
  children: ReactNode;
}
interface InitialState {
  isLoggedIn: boolean;
  name: string;
}
type ContextValue =InitialState & {
  loggInHandler: (value: { value: string }) => void;
  logoutHandler: () => void;
};
const initialState: InitialState = {
  isLoggedIn: false,
  name: "",
};
interface Action {
  type: "LOGIN" | "LOGOUT";
  payload?: {
    value: string;
  };
}
function authReducer(state: InitialState, action: Action) {
  if (action.type === "LOGIN") {
    if (action.payload === undefined) throw new Error("");
    return {
      isLoggedIn: true,
      name: action.payload.value,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      isLoggedIn: false,
      name: "",
    };
  }
  console.log(state)
  return initialState;
}
export default function AuthContextProvider({ children }: AuthContextProvider) {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const ctx = {
    isLoggedIn: authState.isLoggedIn,
    name: authState.name,
    loggInHandler(value: { value: string }) {
      dispatch({ type: "LOGIN", payload: value });
    },
    logoutHandler() {
      dispatch({ type: "LOGOUT" });
    },
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
