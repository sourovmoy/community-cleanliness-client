import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TinyBarChart = ({ res }) => {
  const chartData = res.contributionCount.map((item) => ({
    ...item,
    paid_amount: Number(item.paid_amount),
  }));

  return (
    <div className="w-full md:w-[30vw] h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="title" tick={{ fontSize: 8 }} interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="paid_amount" radius={[6, 6, 0, 0]} fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyBarChart;
