import React from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { auth } from "../firebase";
import { logout } from "../app/userSlice";
import { ReactComponent as Followers } from "../assets/followers.svg";
import { ReactComponent as Pin } from "../assets/location-pin.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.user);

  const logOutUser = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div className="-mt-8 w-[296px]">
      <div>
        <div className="relative z-10 grid place-items-center">
          <a itemProp="image" href={data.user.photoURL}>
            <img
              src={data.user.photoURL}
              alt=""
              className="h-auto w-64 rounded-full border border-[#1b1f2426]"
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
            {data.user.displayName}
          </span>
          <span className="block text-[1.25rem] font-light leading-[1.5rem] text-[#57606a]">
            {data.user.reloadUserInfo.screenName}
          </span>
        </h1>
      </div>
      <div>
        <button className="mb-3 w-full cursor-pointer rounded border border-[#1b1f2426] bg-[#f6f8fa] py-1 px-4 text-sm font-medium">
          Edit profile
        </button>
        <div className="mb-3 flex items-center gap-1">
          <p className="text-{#57606a flex items-center gap-1 text-sm">
            <Followers />
            <span className="font-semibold">
              {data.authUser.followers}
            </span>{" "}
            followers
          </p>
          {"·"}
          <p className="text-{#57606a text-sm">
            <span className="font-semibold">{data.authUser.following}</span>{" "}
            following
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Pin />
          <span className="text-sm">{data.authUser.location}</span>
        </div>
      </div>
      <div className="mt-4 border-t border-[#d8dee4] pt-4">
        <h3 className="mb-2 text-base font-semibold">Achievements</h3>
      </div>
      <button
        onClick={logOutUser}
        className="mb-3 w-full cursor-pointer rounded border border-[#1b1f2426] bg-[#f6f8fa] py-1 px-4 text-sm font-medium"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
