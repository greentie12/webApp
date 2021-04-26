const trafficLi = document.querySelectorAll(".traffic-li");

trafficLi.forEach((list) => {
  list.addEventListener("click", (e) => {
    let listItem = e.target;
    if (!listItem.classList.contains("highlight")) {
      trafficLi.forEach((list) => {
        list.classList.remove("highlight");
      });
      listItem.classList.add("highlight");

      if (listItem.textContent === "Daily") {
        hourlyChart.data.datasets.forEach((dataset) => {
          dataset.data = [
            850,
            1300,
            1400,
            2200,
            1300,
            2150,
            1950,
            2850,
            2950,
            1900,
            2900,
          ];
        });
        hourlyChart.update();
      } else if (listItem.textContent === "Weekly") {
        hourlyChart.data.datasets.forEach((dataset) => {
          dataset.data = [
            1850,
            2400,
            3000,
            3200,
            2650,
            3250,
            2850,
            3850,
            3850,
            3500,
            3800,
          ];
        });
        hourlyChart.update();
      } else if (listItem.textContent === "Monthly") {
        hourlyChart.data.datasets.forEach((dataset) => {
          dataset.data = [
            2850,
            2900,
            3200,
            3600,
            2950,
            3950,
            2950,
            3950,
            4050,
            4500,
            4800,
          ];
        });
        hourlyChart.update();
      } else {
        hourlyChart.data.datasets.forEach((dataset) => {
          dataset.data = [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500,
          ];
        });
        hourlyChart.update();
      }
    }
  });
});

// Line traffic chart
const trafficCanvas = document.getElementById("traffic-chart");

let trafficDataHourly = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      fill: true,
      borderWidth: 2,
      borderColor: "#9d99b9",
      label: "# of users",
    },
  ],
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    y: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

let hourlyChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficDataHourly,
  options: trafficOptions,
});

// Bar Daily Traffic Chart
const dailyCanvas = document.getElementById("daily-traffic-chart");
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 100, 120, 125, 160, 150, 110],
      backgroundColor: "#766faf",
      borderWidth: 1,
    },
  ],
};

const dailyOptions = {
  scales: {
    y: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

// Doughnut Mobile users chart
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};

const mobileOptions = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
};

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
