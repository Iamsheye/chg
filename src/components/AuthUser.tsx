import { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../app/userSlice";
import { auth } from "../firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Repos from "./Repos";

const AuthUser = () => {
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
          <Sidebar />
          <div className="grow">
            {activeTab === "Repositories" && <Repos />}
          </div>
        </div>
      </div>
      <button className="border-2 bg-red-600" onClick={() => logOutUser()}>
        Logout
      </button>
    </>
  );
};

export default AuthUser;
