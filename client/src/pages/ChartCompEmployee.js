import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Emp_Data } from "./Emp_Data.js";
import PieChart from "./PieChart";
import '../stylesheets/Home.css'


Chart.register(CategoryScale);
 
export default function ChartCompEmployee() {
  const [chartData, setChartData] = useState({
    labels: Emp_Data.map((data) => data.category), 
    datasets: [
      {
        label: "Total Employees",
        data: Emp_Data.map((data) => data.quantity),
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