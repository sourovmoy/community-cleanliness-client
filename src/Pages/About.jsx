import React from "react";
import Motion from "../Components/Motion/Motion";
import MotionHeading from "../Components/Motion/MotionHeading";
import Container from "../Components/Container/Container";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Container>
        <Motion>
          <MotionHeading>
            <p className="heading-primary mt-5">
              About Community Cleanliness & Issue Reporting Portal
            </p>
          </MotionHeading>
          <div className="min-h-screen flex flex-col items-center py-10">
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl text-center mb-8">
              Our platform is designed to empower citizens to report and track
              environmental and community cleanliness issues in their local area.
              Users can report issues like garbage buildup, broken footpaths,
              illegal dumping, waterlogging, and more. The system also allows
              requesting cleanup drives, contributing to community services, and
              tracking personal issue history.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl text-center border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Promote cleanliness, sustainability, and community engagement.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl text-center border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Build cleaner, safer, and more responsible communities.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl text-center border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Values
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Transparency, community participation, and sustainable action.
                </p>
              </div>
            </div>
          </div>
        </Motion>
      </Container>
    </div>
  );
};

export default About;
