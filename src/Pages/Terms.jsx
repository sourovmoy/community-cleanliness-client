import Motion from "../Components/Motion/Motion";
import MotionHeading from "../Components/Motion/MotionHeading";

// Terms.jsx
const Terms = () => {
  return (
    <Motion>
      <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-10 mt-10">
        <MotionHeading>
          <p className="heading-primary mb-8">Terms & Conditions</p>
        </MotionHeading>

        <div className="max-w-4xl text-gray-600 dark:text-gray-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            By using the Community Cleanliness & Issue Reporting Portal, you
            agree to comply with the following terms and conditions:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Users must provide accurate and truthful information when
              reporting issues.
            </li>
            <li>
              The platform is intended solely for environmental and public space
              reporting purposes.
            </li>
            <li>
              Contributions made through the platform should be legitimate and
              used for the specified cleanup activities.
            </li>
            <li>
              The admin team reserves the right to remove any inappropriate or
              abusive content.
            </li>
            <li>
              All users are responsible for maintaining the confidentiality of
              their account credentials.
            </li>
            <li>
              The platform does not guarantee immediate action on reported
              issues.
            </li>
            <li>
              By using this platform, you consent to the storage and processing
              of your data as per privacy policies.
            </li>
          </ol>

          <p>
            These terms may be updated periodically. Continued use of the
            platform constitutes acceptance of the latest terms.
          </p>
        </div>
      </div>
    </Motion>
  );
};

export default Terms;
