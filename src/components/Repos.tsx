import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Dropdown from "./Dropdown";
import { ReactComponent as New } from "../assets/new.svg";
import { ReactComponent as Caret } from "../assets/caret.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Chart } from "../assets/chart.svg";
import { ReactComponent as License } from "../assets/license.svg";

const Repos = () => {
  const data = useSelector((state: RootState) => state.user);
  const [repos, setRepos] = useState(data.userRepos);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setRepos(data.userRepos);
  }, [data.userRepos]);

  useEffect(() => {
    setRepos(() =>
      data.userRepos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <section>
      <div className="border-b border-[#d0d7de] py-4">
        <div className="gap-4 md:flex">
          <div className="mb-2.5 grow gap-4 md:mb-0 md:flex">
            <form className="mb-1.5 grow md:mb-0">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-[#d0d7de] py-1.5 px-3 text-sm focus-visible:outline-[#0969da]"
              />
            </form>
            <div className="ml-auto flex items-center gap-1">
              <Dropdown name="Type" />
              <Dropdown name="Language" />
              <Dropdown name="Sort" />
            </div>
          </div>
          <button className="border-[##1b1f2426] flex w-full cursor-pointer justify-center rounded-md border bg-[#2da44e] py-1.5 px-4 text-sm font-medium text-white md:ml-auto md:w-auto">
            <span className="flex items-center gap-1.5 ">
              <New className="fill-current text-white" />
              New
            </span>
          </button>
        </div>
      </div>
      <div>
        <ul>
          {repos.map((elem) => (
            <li
              key={elem.id}
              className="grid grid-cols-12 border-b border-[#d0d7de] py-6"
            >
              <div className="col-span-10 md:col-span-9">
                <div className="mb-1">
                  <h3>
                    <span className="text-xl font-semibold text-[#0969da]">
                      {elem.name}
                    </span>
                    <span className="ml-1.5 inline-block rounded-2xl border border-[#d0d7de] px-1.5 align-text-top text-xs font-medium text-[#57606a]">
                      {elem.private ? "Private" : "Public"}
                    </span>
                  </h3>
                </div>
                <div>
                  <p className="mb-2 text-sm text-[#57606a]">
                    {elem.description}
                  </p>
                </div>
                <div className="mt-2 text-xs text-[#57606a]">
                  {elem.language && (
                    <span className="mr-4">{elem.language}</span>
                  )}{" "}
                  {elem.stargazers_count >= 1 && (
                    <span className="mr-4">
                      <Star className="mr-1 inline-block fill-current align-middle text-[#57606a]" />
                      {elem.stargazers_count}
                    </span>
                  )}{" "}
                  {elem.forks_count >= 1 && (
                    <span className="mr-4">{elem.forks_count}</span>
                  )}{" "}
                  {elem.license && (
                    <span className="mr-4">
                      <License className="mr-1 inline-block fill-current align-middle text-[#57606a]" />
                      {elem.license.name}
                    </span>
                  )}
                  Updated on {format(new Date(elem.updated_at), "d MMM yyyy")}
                </div>
              </div>
              <div className="col-span-2 md:col-span-3">
                <div className="mb-3 flex justify-end">
                  <div className="flex cursor-pointer">
                    <div className="rounded-l-md border border-[#1b1f2426] bg-[#f6f8fa] py-1 px-3 text-xs font-medium">
                      <Star className="mr-1 inline-block fill-current align-middle text-[#57606a]" />
                      Star
                    </div>
                    <div className="rounded-r-md border border-l-0 border-[#1b1f2426] bg-[#f6f8fa] py-1 px-1.5 text-xs font-medium">
                      <Caret className="h-4 w-4 opacity-80" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div>
                    <Chart />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Repos;
