import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { login, setLoading, setError } from "../app/userSlice";
import AuthUser from "../components/AuthUser";
import { auth } from "../firebase";
import GitHubIcon from "../assets/github.png";

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
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res: any) => setUpdate(true))
      .catch((err: any) => {
        dispatch(setError(err.code));
      })
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <div>
      {data.loading ? (
        <section className="grid h-[100vh] place-items-center">
          <div>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      ) : data.isLoggedIn ? (
        <AuthUser />
      ) : (
        <section className="grid h-[100vh] place-items-center">
          <div>
            <button
              onClick={logInUser}
              className="flex items-center gap-3 rounded-md bg-[#171515] py-3  px-6 text-lg font-bold text-white text-white hover:scale-110"
            >
              Login with GitHub <img src={GitHubIcon} width="24" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
