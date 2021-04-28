const bellNotify = document.querySelector(".notify");
// #myModal <div> element
const modal = document.getElementById("myModal");
// <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// .modal-content <div>
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
    para.textContent = `Please enter a message to ${user.value} before submitting`;
    content.appendChild(para);
  } else {
    para.textContent = `You have sent a message to ${user.value}`;
    content.appendChild(para);
    user.value = "";
    message.value = "";
  }
});

let messageCount = 3;

// function to display different messages in the modal and update the alert banner
const bellMessage = () => {
  if (messageCount >= 1) {
    modal.style.display = "block";
    para.innerHTML = `<div id="bell-div">
    <div class="bell-message">
    <h5>New Message from WebApp</h5>
    <p>You have recently requested to change your password. If this request was not made by you or done in error, please contact customer service at webapp@example.com</p>
    </div>
    <div class="bell-message">
    <h5>New Message from Jay Oliver</h5>
    <p>Did you get the memo about the TPS reports? It's just that we're putting new coversheets on all the TPS reports before they go out now.</p>
    </div>
    <div class="bell-message">
    <h5>New Message from Autumn Dominguez</h5>
    <p>We just want to take the opportunity to thank you for choosing XYZ as your provider of TPS reports. We are proud of our satisfied clientele and look forward to many years of working together.</p>
    </div>
  </div>`;
    content.appendChild(para);
    messageCount = 0;
    alertMessage.innerHTML = `
      <div id="alert-message">
        <h5><span>Alert: </span>You have<span> ${messageCount} </span>unread messages</h5>
        <i class="fas fa-times alert-close"></i>
      </div>
    `;
    bellNotify.style.display = "none";
  } else if (messageCount <= 0) {
    modal.style.display = "block";
    para.textContent = `You have no new messages`;
    content.appendChild(para);
    // alertMessage.style.display = "none";
  }
};

bellSvg.addEventListener("click", bellMessage);

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
  if (messageCount === 0) {
    alertMessage.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    if (messageCount === 0) {
      alertMessage.style.display = "none";
    }
  }
});
