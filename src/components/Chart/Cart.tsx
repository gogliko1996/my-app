import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { colors } from "../../utils/color/color";
import { useResponsive } from "../../utils/hooks/useResponsive";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Lisa Mathewson",
      data: [40, 80, 3, 4, 100, 49],
      borderColor: colors.mediumPurple,
      backgroundColor: colors.mediumPurple,
    },
    {
      label: "Company Average",
      data: [100, 140, 60, 200, 180, 40],
      borderColor: 'rgba(130, 125, 125, 0.5)',
      backgroundColor: 'rgba(130, 125, 125, 0.5)',
      borderDash: [5, 5]
    },
  ],
};

export const Chart: React.FC = () => {
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  const mobile = !isResponsiveMobile && !isResponsiveTablet ? 40 : 0;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        bottom: mobile,
      },
    },
  };

  return <Line options={options} data={data} />;
};
