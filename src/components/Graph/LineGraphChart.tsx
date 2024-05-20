import { Details } from "@/helpers/columns";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  BarElement,
  Tooltip as BarToolTip,
  Title,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { ResponsiveContainer } from "recharts";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarToolTip,
  Title,
  Legend,
  PointElement,
  LineElement
);

const LineGraph = ({ detailsData }: { detailsData: Array<Details> }) => {
  const data = {
    labels: detailsData.map((item) => item.job_title),
    datasets: [
      {
        label: "Total Jobs",
        data: detailsData.map((item) => item.appearedTimes),
      },
    ],
  };

  return (
    <>
      <h2 className="text-center text-3xl font-bold">Statistics</h2>
      <ResponsiveContainer className="flex justify-center" >
        <Line className=" w-[70%] mx-auto" data={data} />
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
