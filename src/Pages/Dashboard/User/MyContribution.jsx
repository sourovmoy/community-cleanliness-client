import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import useAuth from "../../../Hooks/useAuth";
import { Atom } from "react-loading-indicators";
import { FaFileDownload } from "react-icons/fa";
import Motion from "../../../Components/Motion/Motion";
import MotionHeading from "../../../Components/Motion/MotionHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyContribution = () => {
  const { loader, setLoader } = useAuth();
  const [contributions, setContributions] = useState([]);
  const axiosInstance = useAxiosSecure();
  useEffect(() => {
    axiosInstance.get(`/contribution`).then((res) => {
      setContributions(res.data);
      setLoader(false);
    });
  }, [axiosInstance, setLoader]);

  const handelDownload = (payment) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Cleanup Contribution Report", 20, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    doc.setFontSize(12);
    doc.text(`Title: ${payment.title}`, 20, 40);
    doc.text(`Category: ${payment.category}`, 20, 50);
    doc.text(`Paid Amount:  ${payment.paid_amount}`, 20, 60);
    doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 70);
    doc.text(`Email: ${payment.email}`, 20, 80);

    doc.setFontSize(10);
    doc.text(
      "Thank you for your contribution to a cleaner community!",
      20,
      160
    );

    doc.save(`${payment.title.replace(/\s+/g, "_")}_report.pdf`);
  };

  return (
    <div>
      <MotionHeading>
        My <span className="heading-primary">Contribution</span>: (
        {contributions.length})
      </MotionHeading>
      <div>
        <Motion>
          <div className="shadow-lg rounded-2xl overflow-x-auto mt-10">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-sky-700">
                <tr className="  text-sm sm:text-base">
                  <th className="py-3 px-4 text-left rounded-tl-lg">Image</th>
                  <th className="py-3 px-4 text-left">Issue Title</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Paid Amount (৳)</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">
                    Download
                  </th>
                </tr>
              </thead>
              {loader ? (
                <div className="flex justify-center items-center min-h-screen">
                  <Atom color="#0EA5E9" size="medium" text="" textColor="" />
                </div>
              ) : contributions ? (
                contributions.map((payment) => (
                  <tbody>
                    <tr
                      key={payment._id}
                      className="border-b hover:bg-sky-50 transition-all duration-200 text-sm sm:text-base"
                    >
                      <td className="py-3 px-4">
                        <img
                          src={payment.image}
                          alt={payment.title}
                          className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium ">
                        {payment.title}
                      </td>
                      <td className="py-3 px-4 ">{payment.category}</td>
                      <td className="py-3 px-4 font-semibold text-green-700">
                        ৳ {payment.paid_amount}
                      </td>
                      <td className="py-3 px-4 ">
                        {new Date(payment.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          className="btn-primary flex items-center gap-2"
                          onClick={() => handelDownload(payment)}
                        >
                          Download <FaFileDownload />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-8 text-sm sm:text-base"
                  >
                    No payment records found.
                  </td>
                </tr>
              )}
            </table>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default MyContribution;
