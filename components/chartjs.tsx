import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const datapred = { prediction };
const data = {
  datasets: [
    {
      data: [300, 50, 100, 89, 78, 98],
      backgroundColor: [
        "#EC3B83",
        "#A9D483",
        "#FFD8B6",
        "#B48EFD",
        "#7F67F9",
        "#1B49C9",
      ],
      borderWidth: 0,

      hoverOffset: 4,
      borderRadius: 5,
      spacing: 3,
    },
  ],
  options: {
    cutout: "60%",
  },
};
