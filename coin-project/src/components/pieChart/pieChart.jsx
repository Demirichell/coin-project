import { PieChart } from "@mui/x-charts/PieChart";

const Chart = ({ data }) => {
  const pieData = data.slice(0, 10).map((crypto) => ({
    id: crypto.symbol,
    value: crypto.marketCapUsd,
  }));
  return (
    <PieChart
      series={[
        {
          data: pieData || [],
          arcLabel: (item) => `${item.id}`,
          arcLabelMinAngle: 20,
          outerRadius: 150,
        },
      ]}
      height={600}
    />
  );
};

export default Chart;
