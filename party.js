
let parties = new Map();

parties.set("dnoce.fl@gmail.com", ["Derek Noce", "Kimberly Noce", "Luke Noce", "Holly Noce"]);
parties.set("dagnynoce@gmail.com", ["Dagny Noce", "Vishay Chudgar"]);




// =================== CALLBACKS =========================

function clearInfo() {

  document.getElementById('party').style.display = "none";
  document.getElementById('line').style.display = "none";
  var guestList = document.getElementById('partyGuests');
  while (guestList.firstChild) {
    guestList.removeChild(guestList.firstChild);
  }


  document.getElementById('errorMsg').style.display = "none";

}

function searchChart() {

  let email = document.getElementById('email').value;
    console.log(email);

//   clearInfo();

  // Checking if a key exists
  if (parties.has(email)) {

    // Clear error message
    document.getElementById('errorMsg').style.display = "none";
    
    document.getElementById('party').innerText = "WE HAPPILY INVITE";
    document.getElementById('party').style.display = "block";
    document.getElementById('line').style.display = "block";

    // Get all guests in party
    var list = parties.get(email);

    var guestList = document.getElementById('partyGuests');
    
    for (var name of list) {
        var guestItem = document.createElement('li');
        var guestName = document.createElement('p');
        guestName.textContent = name;
        guestName.setAttribute('class', 'regText');
        guestItem.appendChild(guestName);

        guestList.appendChild(guestItem);
    }
  }
  else {
    clearInfo();

    // Display error message
    if (email != "") {
      var msg = document.getElementById('errorMsg');
      msg.textContent = "'" + email + "'" + " was not found. Check capitalization";
      msg.style.display = "block";
    }
    
  }
}


// ====================== BUTTONS ==========================
const enterButton = document.querySelector(".enterButton");
enterButton.addEventListener("click", searchChart);

const searchBar = document.getElementById("email");
searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchChart();
    }
    else {
      clearInfo();
    }
});




