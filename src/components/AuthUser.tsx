import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { RootState } from "../app/store";
import { logout } from "../app/userSlice";
import { auth } from "../firebase";
import Header from "./Header";
import { useState } from "react";

const AuthUser = () => {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Repositories");

  const logOutUser = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="wrapper">
        <div className="flex gap-6">
          <div className="-mt-8 w-[296px]">
            <div>
              <div className="relative z-10 grid place-items-center">
                <a itemProp="image" href={data.user.user.photoURL}>
                  <img
                    src={data.user.user.photoURL}
                    alt=""
                    className="h-64 w-64 rounded-full border border-[#1b1f2426]"
                  />
                </a>
                <div className="absolute bottom-0 left-full mb-12 -ml-12">
                  <div className="rounded-full border border-[#d0d7de] bg-white px-2 py-[0.375rem]">
                    💭
                  </div>
                </div>
              </div>
              <h1 className="py-4">
                <span className="block text-[1.5rem] font-semibold leading-[1.25rem]">
                  {data.user.user.displayName}
                </span>
                <span className="block text-[1.25rem] font-light leading-[1.5rem] text-[#57606a]">
                  {data.user.user.reloadUserInfo.screenName}
                </span>
              </h1>
            </div>
            <div>
              <button className="mb-3 w-full cursor-pointer rounded border border-[#1b1f2426] bg-[#f6f8fa] py-1 px-4 text-sm font-medium">
                Edit profile
              </button>
              <div className="mb-3"></div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
          <div className="grow"></div>
        </div>
      </div>
      <button className="border-2 bg-red-600" onClick={() => logOutUser()}>
        Logout
      </button>
    </>
  );
};

export default AuthUser;
