import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import * as motion from "motion/react-client";
import jsPDF from "jspdf";

const MyContribution = () => {
  const [contributions, setContributions] = useState([]);
  const axiosInstance = useAxiosInstance();
  useEffect(() => {
    axiosInstance.get("contribution").then((res) => setContributions(res.data));
  }, [axiosInstance]);

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
    console.log("save");
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mt-5 sm:mt-14"
      >
        My <span className="heading-primary">Contribution</span>: (
        {contributions.length})
      </motion.h1>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        ></motion.div>
        <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-8  shadow-lg rounded-2xl overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="btn-primary  text-sm sm:text-base">
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
            {contributions ? (
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
                    <td className="py-3 px-4 font-medium ">{payment.title}</td>
                    <td className="py-3 px-4 ">{payment.category}</td>
                    <td className="py-3 px-4 font-semibold text-green-700">
                      ৳ {payment.paid_amount}
                    </td>
                    <td className="py-3 px-4 ">
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handelDownload(payment)}
                        className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                      >
                        Download
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
      </div>
    </div>
  );
};

export default MyContribution;
