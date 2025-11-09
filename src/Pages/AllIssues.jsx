import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";

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
      <div className="flex justify-center">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-5 sm:mt-10">
        All <span className="heading-primary">Issues</span>:{issues.length}
      </h1>
      
    </div>
  );
};

export default AllIssues;
