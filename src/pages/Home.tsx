import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { login, setLoading, setError } from "../app/userSlice";
import AuthUser from "../components/AuthUser";
import { auth } from "../firebase";

const Home = () => {
  const [update, setUpdate] = useState(false);
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.isLoggedIn) {
      toast.success("You are logged in!");
    }
    if (data.error) {
      toast.error(data.error);
    }
  }, [data.error, data.isLoggedIn]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        dispatch(login(res));
      }
    });
    return unsubscribe;
  }, [update]);

  const logInUser = () => {
    dispatch(setLoading(true));
    signInWithRedirect(auth, new GithubAuthProvider())
      .then((res: any) => setUpdate(true))
      .catch((err: any) => {
        dispatch(setError(err.code));
      })
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <div>
      {data.loading ? (
        "Loading..."
      ) : data.isLoggedIn ? (
        <AuthUser />
      ) : (
        <>
          Home
          <button onClick={logInUser}>Login with GitHub</button>
        </>
      )}
    </div>
  );
};

export default Home;
