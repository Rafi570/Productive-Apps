import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const BChart = ({ singleApp }) => {
  const data = singleApp;

  return (
    <div className="w-full bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
      <h2 className="font-semibold text-lg sm:text-xl mb-6 text-gray-800">
        ⭐ Ratings Breakdown
      </h2>

      <div className="w-full h-[250px] sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 25, left: 25, bottom: 0 }}
            barCategoryGap="20%"
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: "#555", fontWeight: 500 }}
              width={60}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                fontSize: "13px",
              }}
            />
            <Bar
              dataKey="count"
              fill="#FB923C"
              radius={[6, 6, 6, 6]}
              maxBarSize={22}
            >
              <LabelList
                dataKey="count"
                position="right"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  fill: "#444",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BChart;
