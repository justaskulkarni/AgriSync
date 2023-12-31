import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>PRODUCTION/MONTH</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Monthly Production of MFPs"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};