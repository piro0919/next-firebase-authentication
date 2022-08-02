import { User as AuthUser } from "firebase/auth";
export declare type User = {
  error?: Error;
  isLoading: boolean;
  user?: AuthUser;
};
declare function useUser(): User;
export default useUser;
//# sourceMappingURL=index.d.ts.map
