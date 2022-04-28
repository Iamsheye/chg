import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { RootState } from "../app/store";
import { logout } from "../app/userSlice";
import { auth } from "../firebase";

const AuthUser = () => {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logOutUser = () => {
    signOut(auth);
    dispatch(logout());
  };

  return <button onClick={() => logOutUser()}>Logout</button>;
};

export default AuthUser;
