import React from "react";

interface IHeader {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ setActiveTab, activeTab }: IHeader) => {
  const tabs = [
    { name: "Overview" },
    { name: "Repositories" },
    { name: "Projects" },
    { name: "Packages" },
    { name: "Stars" },
  ];

  return (
    <div className="mt-6 border-b border-[#d0d7de] bg-white">
      <div className="wrapper">
        <div className="flex gap-6">
          <div className="w-[296px]"></div>
          <div className="grow">
            <div className="scrollbar flex overflow-x-auto">
              {tabs.map((elem) => (
                <div
                  className={`flex-none cursor-pointer py-2 px-4 ${
                    activeTab === elem.name ? "border-b-2 border-[#fd8c73]" : ""
                  }`}
                  onClick={() => setActiveTab(elem.name)}
                >
                  <p
                    className={
                      activeTab === elem.name
                        ? "text-sm font-semibold text-[#24292F]"
                        : "text-sm text-[#24292F]"
                    }
                  >
                    {elem.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
