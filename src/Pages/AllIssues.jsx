import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";
import * as motion from "motion/react-client";
import IssueCard from "../Components/IssueCard/IssueCard";

const AllIssues = () => {
  const axiosInstance = useAxiosInstance();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosInstance
      .get("/issues")
      .then((res) => {
        setIssues(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
        setLoading(false);
      });
  }, [axiosInstance]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Atom color="#0EA5E9" size="medium" text="" textColor="" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5 sm:mt-10">
        All <span className="heading-primary ">Issues</span>: {issues.length}
      </h1>
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
