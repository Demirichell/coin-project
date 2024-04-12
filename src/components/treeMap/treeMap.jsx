import ApexCharts from "apexcharts";
import { useEffect } from "react";

const TreemapChart = ({ data }) => {
  console.log(data);
  const chartData = data.slice(0, 20).map((crypto) => ({
    x: crypto.symbol,
    y: crypto.marketCapUsd,
  }));
  console.log(chartData);
  useEffect(() => {
    const options = {
      series: [
        {
          data: chartData || [],
        },
      ],
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        width: 600,
        type: "treemap",
      },
    };

    //console.log(data);

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return <div id="chart"></div>;
};

export default TreemapChart;
