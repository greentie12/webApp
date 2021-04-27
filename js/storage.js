const notifyValue = JSON.parse(localStorage.getItem("checkNotify"));
const publicValue = JSON.parse(localStorage.getItem("checkPublic"));
const timeZoneValue = localStorage.getItem("timezone");
const timeZone = document.getElementById("timezone");
const option = timeZone.querySelector("option");
const submit = document.getElementById("save");

// function to save current checked boolean value of checkNotify to localstorage
const saveNotify = () => {
  let checkbox = document.getElementById("checkNotify");
  localStorage.setItem("checkNotify", checkbox.checked);
};

// function to save current checked boolean value of checkPublic to localstorage
const savePublic = () => {
  let checkbox = document.getElementById("checkPublic");
  localStorage.setItem("checkPublic", checkbox.checked);
};

// function to save current timezone.value to localstorage
const saveTimeZone = () => {
  let timezone = document.getElementById("timezone");
  localStorage.setItem("timezone", timezone.value);
};

// setting the checked or unchecked value to the input
document.getElementById("checkNotify").checked = notifyValue;
document.getElementById("checkPublic").checked = publicValue;

// setting the innerText to the option element
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
