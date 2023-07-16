import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from "./BarChart";
import {Databar} from "./Databar"
import '../stylesheets/Home.css'


Chart.register(CategoryScale);
 
export default function ChartComponent() {
  const [chartData, setChartData] = useState({
    labels: Databar.map((data) => data.item), 
    datasets: [
      {
        label: "Products Graded ",
        data: Databar.map((data) => data.quantity),
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
    <BarChart chartData={chartData}/>
    </div>
  );
}