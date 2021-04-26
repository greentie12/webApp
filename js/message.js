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
    para.textContent = "Please enter a message before submitting";
    content.appendChild(para);
  } else {
    para.textContent = `You have sent a message to ${user.value}`;
    content.appendChild(para);
    user.value = "";
    message.value = "";
  }
});

let messageCount = 2;

// function to display different messages in the modal and update the alert banner
const bellMessage = () => {
  if (messageCount >= 2) {
    modal.style.display = "block";
    para.textContent = `You have requested to change your password. If this request wasn't initiated by you please contact customer service.`;
    content.appendChild(para);
    messageCount--;
    alertMessage.innerHTML = `
      <div id="alert-message">
        <h5><span>Alert: </span>You have<span> ${messageCount} </span>unread messages</h5>
        <i class="fas fa-times alert-close"></i>
      </div>
    `;
  } else if (messageCount > 0) {
    modal.style.display = "block";
    para.textContent = `You have a new message from Jay Oliver`;
    content.appendChild(para);
    bellNotify.style.display = "none";
    messageCount--;
    alertMessage.innerHTML = `
      <div id="alert-message">
        <h5><span>Alert: </span>You have<span> ${messageCount} </span>unread messages</h5>
        <i class="fas fa-times alert-close"></i>
      </div>
    `;
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

// Autocomplet below

const members = document.querySelectorAll("#new-members .member-info p");

let memberArray = [];

members.forEach((member) => {
  memberArray.push(member.textContent);
});

const activeMemebers = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Taino", lastName: "Dominguez" },
  { firstName: "Carol", lastName: "Dixon" },
  { firstName: "Autumn", lastName: "Dominguez" },
  { firstName: "David", lastName: "Burns" },
  { firstName: "Erika", lastName: "Ziznet" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Gail", lastName: "Winds" },
  { firstName: "Harry", lastName: "Potter" },
  { firstName: "Ice", lastName: "Cube" },
  { firstName: "Kim", lastName: "Kardashian" },
  { firstName: "Larry", lastName: "David" },
  { firstName: "Marilyn", lastName: "Manson" },
  { firstName: "Nick", lastName: "Jonas" },
  { firstName: "Orlando", lastName: "Bloom" },
  { firstName: "Peter", lastName: "Griffin" },
  { firstName: "Queen", lastName: "Latifah" },
  { firstName: "Scarlett", lastName: "Johansson" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Frank", lastName: "Mueller" },
];
let fullActiveMembers;

fullActiveMembers = activeMemebers.map(
  (activeMemebers) => `${activeMemebers.firstName} ${activeMemebers.lastName}`
);

for (let x = 0; x < fullActiveMembers.length; x++) {
  memberArray.push(fullActiveMembers[x]);
}

/*the autocomplete function takes two arguments,
  the userInput and an array of names*/
function autocomplete(inp, arr) {
  let currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(user, memberArray);
