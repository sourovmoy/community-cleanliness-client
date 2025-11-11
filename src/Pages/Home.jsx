import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import IssueCard from "../Components/IssueCard/IssueCard";
import CommunitySection from "../assets/CommunitySection/CommunitySection";
// import * as motion from "motion/react-client";

const Home = () => {
  const [issues, setIssues] = useState();
  const axiosInstance = useAxiosInstance();
  const categories = [
    {
      id: 1,
      name: "Garbage",
      image: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
      description:
        "Report overflowing bins, uncollected garbage, or littering issues in your area.",
      color: "from-green-600 to-green-400",
    },
    {
      id: 2,
      name: "Illegal Construction",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      description:
        "Notify about unauthorized building or construction activity in public spaces.",
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 3,
      name: "Broken Public Property",
      image: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
      description:
        "Report damaged benches, street lights, signboards, or other public properties.",
      color: "from-blue-700 to-blue-400",
    },
    {
      id: 4,
      name: "Road Damage",
      image: "https://cdn-icons-png.flaticon.com/512/3406/3406937.png",
      description:
        "Inform about potholes, cracks, or blocked roads due to poor maintenance.",
      color: "from-red-600 to-orange-400",
    },
  ];

  useEffect(() => {
    axiosInstance.get("/recent-issues").then((res) => setIssues(res.data));
  }, [setIssues, axiosInstance]);

  return (
    <div className="min-h-screen">
      <Banner />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold mt-5 mb-5 sm:mb-10"
          >
            Explore Issue<span className="heading-primary"> Categories</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`bg-gradient-to-r ${cat.color}  rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-20 h-20 mb-4 drop-shadow-md"
                />
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-sm opacity-90">{cat.description}</p>
                <Link
                  to={"/add-issues"}
                  className="mt-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition"
                >
                  Report Issue
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold mt-5 mb-5 sm:mb-10"
        >
          Recent<span className="heading-primary"> Issues</span>
        </motion.h2>
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
      </section>
      <CommunitySection />
    </div>
  );
};

export default Home;
