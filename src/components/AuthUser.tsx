import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Repos from "./Repos";

const AuthUser = () => {
  const [activeTab, setActiveTab] = useState("Repositories");

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
    </>
  );
};

export default AuthUser;
