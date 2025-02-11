function basicInfoText() {
  let teamInfo = document.querySelector(".team-info");
  let button = teamInfo.querySelector("button");

  if (button.innerText === "Edit") {
    let elements = teamInfo.querySelectorAll("h1.team-info-font strong");

    elements.forEach((el) => {
      let textNode = el.nextSibling;
      if (textNode && textNode.nodeType === 3) {
        let input = document.createElement("input");
        input.type = "text";
        input.value = textNode.textContent.trim();
        input.className = "team-input";
        el.parentNode.replaceChild(input, textNode);
      }
    });

    let languageElement = document.getElementById("native-language");
    let currentLanguage = languageElement.innerText
      .replace("Native Language: ", "")
      .trim();

    let select = document.createElement("select");
    select.className = "form-select form-select-md team-info-select-options";
    select.id = "language";
    select.style.marginLeft = "155px";
    select.style.marginTop = "-25px";

    let languages = [
      "English",
      "Spanish",
      "Chinese",
      "German",
      "French",
      "Other",
    ];
    languages.forEach((lang) => {
      let option = document.createElement("option");
      option.value = lang;
      option.innerText = lang;
      if (lang === currentLanguage) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    languageElement.innerHTML = "<strong>Native Language: </strong>";
    languageElement.appendChild(select);

    button.innerText = "Save";
    button.onclick = saveInfoText;
  }
}

function saveInfoText() {
  let inputs = document.querySelectorAll(".team-input");
  let emptyFields = false;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      emptyFields = true;
    }
  });

  if (emptyFields) {
    alert("Fields cannot be empty!");
    return;
  }

  inputs.forEach((input) => {
    let text = document.createTextNode(` ${input.value}`);
    let parent = input.parentNode;
    parent.replaceChild(text, input);
  });

  let languageSelect = document.querySelector(".team-info-select-options");
  let selectedLanguage = languageSelect.value;
  let languageElement = document.getElementById("native-language");
  languageElement.innerHTML = `<strong>Native Language: </strong>${selectedLanguage}`;

  const editButton = document.querySelector(".team-info button");
  editButton.textContent = "Edit";
  editButton.onclick = basicInfoText;
}
