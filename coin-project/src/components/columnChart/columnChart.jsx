import { BarChart } from "@mui/x-charts/BarChart";

const ColumnChart = ({ data }) => {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: [("name", "name", "name")] }]}
      series={[{ data: [data] }]}
      width={600}
      height={400}
    />
  );
};
export default ColumnChart;
