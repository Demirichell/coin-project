import ApexCharts from "apexcharts";

import React, { useEffect, useRef } from "react";

const TreemapChart = () => {
  const treemapData = data.slice(0, 10).map((crypto) => ({
    x: crypto.symbol,
    y: crypto.marketCapUsd,
  }));
   return (
     <TreemapChart
   series={[
      {
        data:  [
          {
            x: crypto.symbol,
            y: crypto.marketCapUsd,
         
           
      },
    
    ],
    
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    title: {
      text: "Basic Treemap",
    },
  }]

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  />
);
};

export default TreemapChart;
