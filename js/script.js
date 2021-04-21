const alertMessage = document.getElementById("alert");
const bellNotify = document.querySelector(".notify");

// Alert banner message
alertMessage.innerHTML = `
<div id="alert-message">
    <h5><span>Alert: </span>You have<span> 2 </span>unread messages</h5>
    <i class="fas fa-times alert-close"></i>
</div>
`;

// Alert banner event listener to close on click
alertMessage.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-close")) {
    alertMessage.style.display = "none";
    bellNotify.style.display = "none";
  }
});

// variable for today's date
const currentDate = new Date();
const dateDiv = document.querySelectorAll(".date");
// function to insert current date in dateDiv
const insertDate = () => {
  dateDiv.forEach((date) => {
    date.innerHTML = currentDate.toLocaleDateString();
  });
};

insertDate();

const timeDiv = document.querySelectorAll(".activity-time");
// function to insert a random time for recent activity
const insertRandomTime = () => {
  timeDiv.forEach((time) => {
    const random = Math.floor(Math.random() * 30);
    if (random < 24) {
      time.innerHTML = `
        ${random} hours ago
      `;
    } else {
      time.innerHTML = "1 day ago";
    }
  });
};

insertRandomTime();

// Line traffic chart
const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
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

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
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
