import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import PieChart from "./PieChart";
import '../stylesheets/Home.css'


Chart.register(CategoryScale);
 
export default function ChartComponent() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.graded), 
    datasets: [
      {
        label: "Products Graded ",
        data: Data.map((data) => data.grade),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="ChartComponent">
    <PieChart chartData={chartData}/>

    </div>
  );
}