import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Record() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("https://sheetdb.io/api/v1/kl1relr19x1i0");
      const resData = await reqData.json();
      setData(resData);
      console.log(resData);
    };

    getUserData();
  }, []);

  const placedf = (value) => value == "Placed";
  const placed = data.filter(placedf);
  console.log(placed);

  const placed1 = data.filter((str) => {
    return str.status == "Placed";
  });

  const unplaced1 = data.filter((str) => {
    return str.status == "Not Placed";
  });

  const A = data.filter((str) => {
    return str.company == "A";
  });
  const B = data.filter((str) => {
    return str.company == "B";
  });
  const C = data.filter((str) => {
    return str.company == "C";
  });
  const D = data.filter((str) => {
    return str.company == "D";
  });
  const E = data.filter((str) => {
    return str.company == "E";
  });
  const F = data.filter((str) => {
    return str.company == "F";
  });
  const G = data.filter((str) => {
    return str.company == "G";
  });
  const H = data.filter((str) => {
    return str.company == "H";
  });
  const I = data.filter((str) => {
    return str.company == "I";
  });
  const J = data.filter((str) => {
    return str.company == "J";
  });
  const X = data.filter((str) => {
    return str.company == "X";
  });
  const Y = data.filter((str) => {
    return str.company == "Y";
  });
  const Z = data.filter((str) => {
    return str.company == "Z";
  });

  const data1 = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "X", "Y", "Z"],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          A.length,
          B.length,
          C.length,
          D.length,
          E.length,
          F.length,
          G.length,
          H.length,
          I.length,
          J.length,
          X.length,
          Y.length,
          Z.length,
        ],
        backgroundColor: ["#bfbfbf", "#404040"],
      },
    ],
  };

  const data2 = {
    labels: ["Placed", "Unplaced"],
    datasets: [
      {
        label: "Students Data",
        data: [placed1.length, unplaced1.length],
        backgroundColor: ["#bfbfbf", "#404040"],
        borderColor: ["white", "white"],
        borderWidth: 10,
      },
    ],
  };

  const options11 = {
    plugins: {
      legend: {
        display: false,
      },
    },

    elements: {
      point: {
        radius: 0,
      },
    },

    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: true,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },

        title: {
          text: "Comapnies",
          display: true,

          color: "black",
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: true,
          beginAtZero: true,
        },
        title: {
          text: "# of Students",
          display: true,
          color: "black",
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const options12 = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },

    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "25vw", width: "40vw", marginLeft: "10vw" }}>
        <Bar data={data1} options={options11} />
      </div>

      <div style={{ height: "25vw", width: "20vw", marginLeft: "10vw" }}>
        <Doughnut data={data2} options={options12} />
      </div>
    </div>
  );
}

export default Record;
