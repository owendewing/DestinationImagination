function resetFormButtonStyles() {
  document.getElementById("tm-form").style.color = "rgb(133, 131, 131)";
  document.getElementById("tm-form").style.backgroundColor = "#EFEFEF";

  document.getElementById("p-form").style.color = "rgb(133, 131, 131)";
  document.getElementById("p-form").style.backgroundColor = "#EFEFEF";

  document.getElementById("s-form").style.color = "rgb(133, 131, 131)";
  document.getElementById("s-form").style.backgroundColor = "#EFEFEF";
}

function teamManagerForm() {
  resetFormButtonStyles();
  let teamManagerButton = document.getElementById("tm-form");
  teamManagerButton.style.color = "black";
  teamManagerButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".forms-team-managers").style.display = "block";
  document.querySelector(".forms-participants").style.display = "none";
  document.querySelector(".forms-spectators").style.display = "none";
}

function participantsForm() {
  resetFormButtonStyles();
  let participantsButton = document.getElementById("p-form");
  participantsButton.style.color = "black";
  participantsButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".forms-team-managers").style.display = "none";
  document.querySelector(".forms-participants").style.display = "block";
  document.querySelector(".forms-spectators").style.display = "none";
}

function spectatorsForm() {
  resetFormButtonStyles();
  let spectatorsButton = document.getElementById("s-form");
  spectatorsButton.style.color = "black";
  spectatorsButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".forms-team-managers").style.display = "none";
  document.querySelector(".forms-participants").style.display = "none";
  document.querySelector(".forms-spectators").style.display = "block";
}
