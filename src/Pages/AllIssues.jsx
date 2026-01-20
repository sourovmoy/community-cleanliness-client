import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";
import IssueCard from "../Components/IssueCard/IssueCard";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import Motion from "../Components/Motion/Motion";
import MotionHeading from "../Components/Motion/MotionHeading";
import SkeletonIssueCard from "../Components/Skeleton/SkeletonIssueCard";
import Container from "../Components/Container/Container";

const limit = 12;
const AllIssues = () => {
  const [search, setSearch] = useState("");
  const axiosInstance = useAxiosInstance();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");
  const [sort1, setSort1] = useState("default");
  const [issueCount, setIssueCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/issues", {
        params: {
          search: search || undefined,
          category: sort !== "default" ? sort : undefined,
          status: sort1 !== "default" ? sort1 : undefined,
          limit: limit,
          skip: (page - 1) * limit,
        },
      })
      .then((res) => {
        setIssueCount(res.data.count);
        setIssues(res.data.issues);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, search, sort, sort1, page]);

  const totalPages = Math.ceil(issueCount / limit);

  const handelSearch = (e) => {
    e.preventDefault();
    let search = e.target.search.value;
    const trim = search.trim().toLocaleLowerCase();
    e.target.reset();
    setSearch(trim);
    setPage(1);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Container>
        <div>
          <MotionHeading>
            All <span className="heading-primary">Issues</span>: {issueCount}
          </MotionHeading>
          <Motion>
            <div className="text-center text-3xl font-bold mt-5 sm:mt-10 flex flex-col justify-center items-center">
              <div className="items-center">
                <form onSubmit={handelSearch}>
                  <input
                    name="search"
                    type="text"
                    placeholder="search For Issues..."
                    className="input rounded-l-full border-r-none w-auto sm:w-[40vw] mb-3 sm:mb-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                  <button className="submit btn btn-md absolute b-5 rounded-r-full border-r-none text-white bg-gradient-to-l from-sky-700 to-sky-400 hover:from-sky-800 hover:to-sky-500 transition-colors duration-200">
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="space-x-2">
                <Link
                  to={"/add-issues"}
                  className="btn text-white btn-primary border-none hover:scale-102 hover:shadow-lg duration-300"
                >
                  Create Issues
                </Link>
                <Link
                  to={"/dashboard/user/my-issues"}
                  className="btn bg-white dark:bg-gray-200 border-sky-400 outline-1 outline-sky-900 text-sky-900 dark:text-sky-800 my-3 hover:scale-102 hover:shadow-lg duration-300 transition-colors"
                >
                  My Issues
                </Link>
              </div>
            </div>
          </Motion>
        </div>

        <div className="sm:flex justify-between">
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered mb-5 sm:mb-0 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              value={sort}
              onChange={(e) => {
                setSort1(e.target.value);
              }}
            >
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="default">
                Sort by Status
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="active">
                Active
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="resolved">
                Resolved
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="ongoing">
                Ongoing
              </option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="default">
                Sort by Category
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="Garbage">
                Garbage
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="Vandalism">
                Vandalism
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="Footpath">
                Footpath
              </option>
              <option className="hover:bg-sky-200 dark:hover:bg-sky-800" value="Illegal Activity">
                Illegal Activity
              </option>
              <option value="Waterlogging">Waterlogging</option>
            </select>
          </label>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-3 mt-5 sm:mt-14">
          {loading ? (
            Array.from({ length: 16 }, (_, i) => <SkeletonIssueCard key={i} />)
          ) : issues ? (
            issues.map((issue) => (
              <Motion key={issue._id}>
                <IssueCard issue={issue}></IssueCard>
              </Motion>
            ))
          ) : (
            <div className="text-4xl flex justify-center">
              <h1 className="text-gray-600 dark:text-gray-400">No Issue Found</h1>
            </div>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10 flex-wrap">
            {/* Prev Button */}
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded transition-colors duration-200 ${
                  page === i + 1
                    ? "bg-sky-500 text-white dark:bg-sky-600"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllIssues;
