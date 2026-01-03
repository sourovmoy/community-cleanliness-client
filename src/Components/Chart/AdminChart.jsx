import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminChart = ({ data }) => {
  return (
    <div className="w-full h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.contributionCount}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="5 5" />
          <Bar dataKey="paid_amount" barSize={30} fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminChart;
