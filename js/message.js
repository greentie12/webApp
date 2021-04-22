// Get the modal
const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
//  Get the .modal-content <div>
const content = document.querySelector(".modal-content");

const user = document.getElementById("userInput");
const message = document.getElementById("message-area");
const send = document.getElementById("form-button");
const para = document.createElement("p");

const bellSvg = document.querySelector(".bell-svg");

send.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
  if (user.value === "" && message.value === "") {
    para.textContent = `Please enter a user and a message before submitting`;
    content.appendChild(para);
  } else if (user.value === "") {
    para.textContent = "Please enter a user before submitting";
    content.appendChild(para);
  } else if (message.value === "") {
    para.textContent = "Please enter a message before submitting";
    content.appendChild(para);
  } else {
    para.textContent = `You have sent a message to ${user.value}`;
    content.appendChild(para);
    user.value = "";
    message.value = "";
  }
});

let count = 2;
const bellMessage = () => {
  if (count > 1) {
    modal.style.display = "block";
    para.textContent = `You have a new message from Jay Oliver`;
    content.appendChild(para);
    bellNotify.style.display = "none";
    count--;
    console.log(count);
  } else if (count < 1) {
    para.textContent = `You have no new messages`;
    content.appendChild(para);
    bellNotify.style.display = "none";
    bellSvg.removeEventListener("click", bellMessage);
  }
};

bellSvg.addEventListener("click", bellMessage);

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
