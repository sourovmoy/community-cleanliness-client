import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";
import * as motion from "motion/react-client";
import IssueCard from "../Components/IssueCard/IssueCard";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const AllIssues = () => {
  const [search, setSearch] = useState("");
  const axiosInstance = useAxiosInstance();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");

  // useEffect(() => {
  //   axiosInstance
  //     .get(sort === "default" ? "/issues" : `/issues?category=${sort}`)
  //     .then((res) => {
  //       setIssues(res.data);
  //       setLoading(false);
  //     });
  // }, [axiosInstance, sort]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/issues", {
        params: {
          search: search || undefined, // only include if search has value
          category: sort !== "default" ? sort : undefined,
        },
      })
      .then((res) => {
        setIssues(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, search, sort]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Atom color="#0EA5E9" size="medium" text="" textColor="" />
      </div>
    );
  }
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold mt-5 sm:mt-10 flex flex-col justify-center items-center"
        >
          <div className="items-center">
            {/* <form onSubmit={(e) => e.preventDefault()}> */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              type="text"
              placeholder="search For Issues..."
              className="input rounded-l-full border-r-none w-auto sm:w-[40vw] mb-3 sm:mb-3"
            />
            <button className="btn btn-md absolute b-5 rounded-r-full border-r-none text-white bg-linear-to-l from-sky-700 to-sky-400">
              <FaSearch />
            </button>
            {/* </form> */}
          </div>
          <div className="space-x-2">
            <Link
              to={"/add-issues"}
              className="btn text-white btn-primary border-none hover:scale-102 hover:shadow-lg duration-300"
            >
              Create Issues
            </Link>
            <Link
              to={"/my-issues"}
              className="btn bg-white dark:bg-gray-200 border-sky-400 outline-1 outline-sky-900 text-sky-900 my-3 hover:scale-102 hover:shadow-lg duration-300"
            >
              Post an Product
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mt-5 sm:mt-10"
      >
        All <span className="heading-primary ">Issues</span>: {issues.length}
      </motion.h1>
      <div className="flex justify-end">
        {" "}
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="default">Default</option>
            <option value="Garbage">Garbage</option>
            <option value="Vandalism">Vandalism</option>
            <option value="Footpath">Footpath</option>
            <option value="Illegal Activity">Illegal Activity</option>
            <option value="Waterlogging">Waterlogging</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-5 sm:mt-14">
        {issues ? (
          issues.map((issue) => (
            <motion.div
              key={issue._id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <IssueCard issue={issue}></IssueCard>
            </motion.div>
          ))
        ) : (
          <div className="text-4xl flex justify-center">
            <h1>No Issue Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllIssues;
