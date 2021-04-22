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
