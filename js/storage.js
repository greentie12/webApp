const notifyValue = JSON.parse(localStorage.getItem("checkNotify"));
const publicValue = JSON.parse(localStorage.getItem("checkPublic"));
const timeZoneValue = localStorage.getItem("timezone");
const timeZone = document.getElementById("timezone");
const option = timeZone.querySelector("option");
const submit = document.getElementById("save");

const saveNotify = () => {
  let checkbox = document.getElementById("checkNotify");
  localStorage.setItem("checkNotify", checkbox.checked);
};

const savePublic = () => {
  let checkbox = document.getElementById("checkPublic");
  localStorage.setItem("checkPublic", checkbox.checked);
};

const saveTimeZone = () => {
  let timezone = document.getElementById("timezone");
  localStorage.setItem("timezone", timezone.value);
};

document.getElementById("checkNotify").checked = notifyValue;
document.getElementById("checkPublic").checked = publicValue;

if (timeZoneValue === null) {
  option.innerText = "Select Timezone";
} else {
  option.innerText = timeZoneValue;
}

submit.addEventListener("click", () => {
  saveNotify();
  savePublic();
  saveTimeZone();
  modal.style.display = "block";
  para.textContent = `Your settings have been saved.`;
  content.appendChild(para);
});
