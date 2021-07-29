import React from "react";
import { Bar } from "react-chartjs-2";

export default function TraitsGraph(props) {
  const labels = [
    "Strength",
    "Discipline",
    "Constitution",
    "Intelligence",
    "Sense",
    "Will",
    "Charm",
  ];

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    return {
      base: 100,
      labels,
      datasets: [
        {
          label: "Vaue",
          data: props.traits,
          borderWidth: 3,
          fill: true,
          borderColor: "rgb(102, 252, 241)",
          backgroundColor: "rgb(102, 252, 241, 0.5)"
        },
      ],
    };
  };

  const options = {
    scales: {
        x: {
          fontColor: 'white',
          grid: {
            borderColor: 'white'
          }
        },
        y: {
          borderColor: 'white'
      },
    }
}

  return <Bar data={data} width={400} height={75} options={options}></Bar>;
}
