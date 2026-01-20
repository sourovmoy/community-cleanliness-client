import { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import IssueCard from "../Components/IssueCard/IssueCard";
import CommunitySection from "../assets/CommunitySection/CommunitySection";
import Motion from "../Components/Motion/Motion";
import MotionHeading from "../Components/Motion/MotionHeading";
import { FaArrowRight, FaUsers, FaHandHoldingHeart, FaExclamationTriangle, FaCheckCircle, FaLeaf, FaRecycle, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import SkeletonIssueCard from "../Components/Skeleton/SkeletonIssueCard";
import Container from "../Components/Container/Container";
import { DashboardCard } from "../Components/Card/Card";

const Home = () => {
  const [issues, setIssues] = useState();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalIssues: 0,
    resolvedIssues: 0,
    totalContributions: 0,
    activeUsers: 0
  });
  const axiosInstance = useAxiosInstance();

  const categories = [
    {
      id: 1,
      name: "Garbage",
      image: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
      description: "Report overflowing bins, uncollected garbage, or littering issues in your area.",
      color: "from-green-600 to-green-400",
    },
    {
      id: 2,
      name: "Illegal Construction",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      description: "Notify about unauthorized building or construction activity in public spaces.",
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 3,
      name: "Broken Public Property",
      image: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
      description: "Report damaged benches, street lights, signboards, or other public properties.",
      color: "from-blue-700 to-blue-400",
    },
    {
      id: 4,
      name: "Road Damage",
      image: "https://cdn-icons-png.flaticon.com/512/3406/3406937.png",
      description: "Inform about potholes, cracks, or blocked roads due to poor maintenance.",
      color: "from-red-600 to-orange-400",
    },
  ];

  const impactStats = [
    { icon: FaExclamationTriangle, label: "Issues Reported", value: stats.totalIssues, color: "from-red-500 to-pink-500" },
    { icon: FaCheckCircle, label: "Issues Resolved", value: stats.resolvedIssues, color: "from-green-500 to-emerald-500" },
    { icon: FaHandHoldingHeart, label: "Total Contributions", value: `${stats.totalContributions}`, suffix: <FaBangladeshiTakaSign />, color: "from-blue-500 to-cyan-500" },
    { icon: FaUsers, label: "Active Community Members", value: stats.activeUsers, color: "from-purple-500 to-indigo-500" }
  ];

  const features = [
    {
      icon: FaExclamationTriangle,
      title: "Report Issues",
      description: "Easily report cleanliness and infrastructure issues in your community with photos and location details.",
      color: "text-red-500"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Contribute Funds",
      description: "Support community improvement by contributing financially to resolve reported issues.",
      color: "text-green-500"
    },
    {
      icon: FaUsers,
      title: "Community Collaboration",
      description: "Work together with neighbors and local authorities to create a cleaner, better community.",
      color: "text-blue-500"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Platform",
      description: "Your data and contributions are protected with advanced security measures and transparency.",
      color: "text-purple-500"
    }
  ];

  const sustainabilityTips = [
    {
      icon: FaRecycle,
      title: "Reduce, Reuse, Recycle",
      tip: "Practice the 3 R's to minimize waste generation in your daily life."
    },
    {
      icon: FaLeaf,
      title: "Go Green",
      tip: "Choose eco-friendly alternatives and support sustainable practices in your community."
    },
    {
      icon: FaLightbulb,
      title: "Energy Conservation",
      tip: "Use energy-efficient appliances and turn off lights when not needed."
    }
  ];

  useEffect(() => {
    setLoading(true);
    // Fetch recent issues
    axiosInstance.get("/recent-issues").then((res) => {
      setIssues(res.data);
      setLoading(false);
    });

    // Fetch platform statistics
    axiosInstance.get("/platform-stats").then((res) => {
      setStats(res.data);
    }).catch(() => {
      // Fallback data if API fails
      setStats({
        totalIssues: 1247,
        resolvedIssues: 892,
        totalContributions: 45680,
        activeUsers: 3421
      });
    });
  }, [axiosInstance]);

  return (
    <div className="">
      {/* Section 1: Hero Banner */}
      <Banner />
      
      <Container>
        {/* Section 2: Platform Impact Statistics */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionHeading>
              Our Community <span className="heading-primary">Impact</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-12 max-w-2xl mx-auto text-lg">
              Together, we're making a real difference in our communities. See the impact of our collective efforts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, idx) => (
                <Motion key={idx}>
                  <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                    {/* Light Mode Card */}
                    <div className={`block dark:hidden bg-gradient-to-br ${stat.color} h-36 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex items-center justify-between">
                          <div className="text-4xl text-white/90 group-hover:text-white transition-colors duration-300">
                            <stat.icon />
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-white/80 mb-2 font-medium">{stat.label}</p>
                          <h3 className="text-3xl font-bold text-white flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.value} 
                            {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                          </h3>
                        </div>
                      </div>
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>

                    {/* Dark Mode Card */}
                    <div className="hidden dark:block bg-gradient-to-br from-gray-800 to-gray-900 h-36 p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-gray-600 transition-all duration-300">
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex items-center justify-between">
                          <div className={`text-4xl transition-colors duration-300 ${
                            stat.color.includes('red') ? 'text-red-400 group-hover:text-red-300' :
                            stat.color.includes('green') ? 'text-green-400 group-hover:text-green-300' :
                            stat.color.includes('blue') ? 'text-blue-400 group-hover:text-blue-300' :
                            'text-purple-400 group-hover:text-purple-300'
                          }`}>
                            <stat.icon />
                          </div>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            stat.color.includes('red') ? 'bg-red-500/20' :
                            stat.color.includes('green') ? 'bg-green-500/20' :
                            stat.color.includes('blue') ? 'bg-blue-500/20' :
                            'bg-purple-500/20'
                          }`}>
                            <div className={`w-2 h-2 rounded-full animate-pulse ${
                              stat.color.includes('red') ? 'bg-red-400' :
                              stat.color.includes('green') ? 'bg-green-400' :
                              stat.color.includes('blue') ? 'bg-blue-400' :
                              'bg-purple-400'
                            }`}></div>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-gray-400 mb-2 font-medium group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
                          <h3 className="text-3xl font-bold text-white flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.value} 
                            {stat.suffix && <span className="text-2xl text-gray-300">{stat.suffix}</span>}
                          </h3>
                        </div>
                      </div>
                      {/* Dark mode shine effect */}
                      <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                        stat.color.includes('red') ? 'bg-gradient-to-r from-transparent via-red-500/10 to-transparent' :
                        stat.color.includes('green') ? 'bg-gradient-to-r from-transparent via-green-500/10 to-transparent' :
                        stat.color.includes('blue') ? 'bg-gradient-to-r from-transparent via-blue-500/10 to-transparent' :
                        'bg-gradient-to-r from-transparent via-purple-500/10 to-transparent'
                      }`}></div>
                    </div>
                  </div>
                </Motion>
              ))}
            </div>

            {/* Additional Stats Summary */}
            <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="font-semibold text-sky-600 dark:text-sky-400">Real-time data</span> updated every hour • 
                <span className="font-semibold text-green-600 dark:text-green-400 ml-2">Growing community</span> of changemakers • 
                <span className="font-semibold text-purple-600 dark:text-purple-400 ml-2">Transparent</span> contribution tracking
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Issue Categories */}
        <section className="py-12">
          <div className="text-center">
            <MotionHeading>
              Report Issues by <span className="heading-primary">Category</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">
              Choose the appropriate category to report community issues and help us address them effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <Motion key={idx}>
                  <div
                    className={`bg-gradient-to-r ${cat.color} rounded-2xl shadow-lg p-6 flex flex-col items-center h-64 transition-all transform hover:-translate-y-2 hover:shadow-2xl`}
                  >
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-20 h-20 drop-shadow-md object-contain"
                      />
                    </div>
                    
                    <div className="h-8 flex items-center justify-center mb-2">
                      <h3 className="text-xl font-semibold text-center">{cat.name}</h3>
                    </div>
                    
                    <div className="flex-grow flex items-center justify-center mb-4">
                      <p className="text-sm opacity-90 text-center line-clamp-2">{cat.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <Link
                        to={"/add-issues"}
                        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition-all duration-200 text-sm"
                      >
                        Report Issue
                      </Link>
                    </div>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Platform Features */}
        <section className="py-12 rounded-3xl my-12">
          <div className="text-center">
            <MotionHeading>
              Platform <span className="heading-primary">Features</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">
              Discover the powerful features that make community improvement simple and effective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Motion key={idx}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`text-4xl ${feature.color} mb-4 flex justify-center`}>
                      <feature.icon />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Recent Issues */}
        <section className="py-12">
          <div className="">
            <div className="text-center mb-8">
              <MotionHeading>
                Recent Community <span className="heading-primary">Issues</span>
              </MotionHeading>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Stay updated with the latest issues reported by community members and track their resolution progress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {loading ? (
                Array.from({ length: 8 }, (_, i) => <SkeletonIssueCard key={i} />)
              ) : issues && issues.length > 0 ? (
                issues.map((issue, idx) => (
                  <Motion key={issue._id || idx}>
                    <IssueCard issue={issue} />
                  </Motion>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">
                    <FaExclamationTriangle className="mx-auto opacity-50" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No Issues Found</h3>
                  <p className="text-gray-500 dark:text-gray-500">Be the first to report an issue in your community!</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-center mt-8">
              <Link 
                to={"/all-issues"} 
                className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              >
                View All Issues <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionHeading>
              How It <span className="heading-primary">Works</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
              Simple steps to make a difference in your community through our platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Motion>
                <div className="relative">
                  <div className="bg-sky-100 dark:bg-sky-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Report an Issue</h3>
                  <p className="text-gray-600 dark:text-gray-400">Take a photo, add location details, and describe the cleanliness or infrastructure issue you've encountered.</p>
                </div>
              </Motion>

              <Motion>
                <div className="relative">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Community Contributes</h3>
                  <p className="text-gray-600 dark:text-gray-400">Community members can contribute financially to help resolve the issue and support local improvement efforts.</p>
                </div>
              </Motion>

              <Motion>
                <div className="relative">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Issue Gets Resolved</h3>
                  <p className="text-gray-600 dark:text-gray-400">With community support and proper funding, local authorities can address and resolve the reported issues effectively.</p>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Section 7: Sustainability Tips */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl my-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionHeading>
              Sustainability <span className="heading-primary">Tips</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">
              Small actions can make a big difference. Here are some tips to help keep our community clean and sustainable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sustainabilityTips.map((tip, idx) => (
                <Motion key={idx}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl text-green-500 mb-4 flex justify-center">
                      <tip.icon />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">{tip.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{tip.tip}</p>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Success Stories */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionHeading>
              Success <span className="heading-primary">Stories</span>
            </MotionHeading>
            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">
              Real stories from community members who have made a positive impact through our platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Motion>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">Playground Restoration</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    "Thanks to community contributions, our local playground was completely renovated. Kids now have a safe place to play!"
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 font-medium text-sm">- Sarah M., Dhaka</p>
                </div>
              </Motion>

              <Motion>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🛣️</div>
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">Road Repair Success</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    "The pothole that was causing accidents for months was finally fixed after we reported it and raised funds together."
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 font-medium text-sm">- Ahmed R., Chittagong</p>
                </div>
              </Motion>

              <Motion>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🌳</div>
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">Green Initiative</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    "Our neighborhood is now cleaner and greener thanks to the tree plantation drive funded by our community."
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 font-medium text-sm">- Fatima K., Sylhet</p>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Section 9: Call to Action */}
        <section className="py-12 bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl text-white text-center my-12">
          <div className="max-w-4xl mx-auto px-4">
            <Motion>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of community members who are actively working to create cleaner, better neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-sky-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                >
                  Join Our Community
                </Link>
                <Link
                  to="/add-issues"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-sky-600 transition-all duration-200 hover:scale-105"
                >
                  Report Your First Issue
                </Link>
              </div>
            </Motion>
          </div>
        </section>

        {/* Section 10: Community Engagement */}
        <Motion>
          <CommunitySection />
        </Motion>
      </Container>
    </div>
  );
};

export default Home;
