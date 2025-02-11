function editManager() {
  const managerRow = document.getElementById("tm-selects");
  const button = document.getElementById("edit-manager");

  if (button.innerText === "Edit") {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "team-manager manager-input";
    nameInput.value = manager.innerText;
    nameInput.style.cssText =
      "margin-top: -5px; font-size: 15px; width: 100px;";
    manager.innerHTML = "";
    manager.appendChild(nameInput);

    const teamsInput = document.createElement("input");
    teamsInput.type = "text";
    teamsInput.className = "team-manager manager-input";
    teamsInput.value = teams.innerText;
    teamsInput.style.cssText =
      "margin-top: -5px; margin-left: 0px; font-size: 15px; width: 80px;";
    teams.innerHTML = "";
    teams.appendChild(teamsInput);

    const pronounsSelect = document.createElement("select");
    pronounsSelect.style.marginLeft = "20px";
    pronounsSelect.className =
      "form-select form-select-md team-info-select-options";
    const pronounsOptions = [
      "he/him",
      "she/her",
      "they/them",
      "I prefer not to answer",
    ];

    pronounsOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.text = optionText;
      pronounsSelect.appendChild(option);
    });

    pronounsSelect.value = pronouns.innerText.trim();
    pronouns.innerHTML = "";
    pronouns.appendChild(pronounsSelect);

    const yesNoFields = managerRow.querySelectorAll("div:nth-child(n+5)");

    yesNoFields.forEach((field) => {
      const select = document.createElement("select");
      select.style.marginLeft = "20px";
      select.className = "form-select form-select-md team-info-select-options";

      const yesOption = document.createElement("option");
      yesOption.value = "Yes";
      yesOption.text = "Yes";

      const noOption = document.createElement("option");
      noOption.value = "No";
      noOption.text = "No";

      select.appendChild(yesOption);
      select.appendChild(noOption);

      select.value = field.innerText.trim();
      field.innerHTML = "";
      field.appendChild(select);
    });

    button.innerText = "Save";
  } else {
    saveManager();
  }
}

function saveManager() {
  let managerRow = document.getElementById("tm-selects");
  let inputs = managerRow.querySelectorAll(".manager-input");

  if ([...inputs].some((input) => input.value.trim() === "")) {
    alert("Fields cannot be empty!");
    return;
  }

  const columns = managerRow.children;

  const nameInput = columns[0].querySelector(".manager-input");
  if (nameInput) {
    columns[0].innerHTML = nameInput.value;
  }

  const teamsInput = columns[2].querySelector(".manager-input");
  if (teamsInput) {
    columns[2].innerHTML = teamsInput.value;
  }

  const pronounsSelect = columns[3].querySelector("select");
  if (pronounsSelect) {
    columns[3].innerHTML = pronounsSelect.value;
  }

  const selects = managerRow.querySelectorAll("select");
  selects.forEach((select) => {
    const parent = select.parentElement;
    parent.innerHTML = select.value;
  });

  let button = document.getElementById("edit-manager");
  button.innerText = "Edit";
  button.onclick = editManager;
}

function addManager() {
  let newRow = document.createElement("div");
  newRow.className = "container text-center overflow-auto";
  newRow.id = "new-tm-row";
  newRow.style.cssText = `
       padding: 15px 40px;
        display: flex;
        gap: 85px;
        margin-left: 0px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100%;
      `;

  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "team-manager manager-input";
  nameInput.placeholder = "Enter name";
  nameInput.style.cssText = "font-size: 15px; width: 100px;";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.cssText = "width: 13px; height: 13px; margin: auto;";

  let teamInput = document.createElement("input");
  teamInput.type = "text";
  teamInput.className = "manager-input";
  teamInput.placeholder = "Team #";
  teamInput.style.cssText = "width: 80px; text-align: center;";

  let pronounsInput = document.createElement("select");
  pronounsInput.className =
    "form-select form-select-md team-info-select-options";
  pronounsInput.style.cssText = "width: 80px; margin-top: 0px;";

  const pronounOptions = [
    { value: "he/him", text: "he/him" },
    { value: "she/her", text: "she/her" },
    { value: "they/them", text: "they/them" },
    { value: "prefer-not", text: "Prefer not to answer" },
  ];

  pronounOptions.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.text = opt.text;
    pronounsInput.appendChild(option);
  });

  const dropdownQuestions = [
    "First Year of DI?",
    "First GF?",
    "DI Alum?",
    "Taken 23/24 TM Certification Courses",
  ];

  const dropdowns = dropdownQuestions.map(() => {
    let select = document.createElement("select");
    select.className = "form-select form-select-md team-manager-select-options";
    select.style.cssText = "min-width: 60px; max-width: 100px; height: 35px;";

    let yesOption = document.createElement("option");
    yesOption.value = "Yes";
    yesOption.text = "Yes";
    let noOption = document.createElement("option");
    noOption.value = "No";
    noOption.text = "No";

    select.appendChild(yesOption);
    select.appendChild(noOption);

    return select;
  });

  newRow.appendChild(nameInput);
  newRow.appendChild(checkbox);
  newRow.appendChild(teamInput);
  newRow.appendChild(pronounsInput);
  dropdowns.forEach((dropdown) => newRow.appendChild(dropdown));

  let managerButtons = document.querySelector(".manager-buttons");
  managerButtons.parentNode.insertBefore(newRow, managerButtons);

  let addButton = document.getElementById("add-manager");
  addButton.innerText = "Save New";

  addButton.onclick = function () {
    let inputs = newRow.querySelectorAll("input");
    let selects = newRow.querySelectorAll("select");

    if ([...inputs].some((input) => input.value.trim() === "")) {
      alert("Please fill in all fields!");
      return;
    }

    let finalRow = document.createElement("div");
    finalRow.className = "row flex-nowrap";
    finalRow.style.cssText =
      "display: flex; align-items: center; gap: 75px; padding: 15px 40px;";

    const columns = [
      { content: inputs[0].value, width: "100px" },
      { content: inputs[1].checked, type: "checkbox", width: "13px" },
      { content: inputs[2].value, width: "80px" },
      { content: selects[0].value, width: "80px" },
      ...Array.from(selects)
        .slice(1)
        .map((select) => ({ content: select.value, width: "100px" })),
    ];

    columns.forEach((col) => {
      let div = document.createElement("div");
      div.className = "col";
      div.style.cssText = `width: ${col.width}; text-align: center;`;

      if (col.type === "checkbox") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = col.content;
        checkbox.style.cssText = "width: 13px; height: 13px; margin: auto;";
        div.appendChild(checkbox);
      } else {
        div.textContent = col.content;
      }

      finalRow.appendChild(div);
    });

    newRow.replaceWith(finalRow);
    addButton.innerText = "Add";
    addButton.onclick = addManager;
  };
}

const style = document.createElement("style");
style.textContent = `
    .manager-input {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 0;
      height: 30px;
    }
    
    .tm-row {
      display: flex;
      align-items: center;
      gap: 30px;
      padding: 15px 40px;
    }
    
    #tm-response-row {
      align-items: center;
    }
  
    .save-new-manager-button {
      display: flex;
    }
  `;
document.head.appendChild(style);
function resetButtonStyles() {
  document.getElementById("tm-page").style.color = "rgb(133, 131, 131)";
  document.getElementById("tm-page").style.backgroundColor = "#EFEFEF";

  document.getElementById("p-page").style.color = "rgb(133, 131, 131)";
  document.getElementById("p-page").style.backgroundColor = "#EFEFEF";

  document.getElementById("s-page").style.color = "rgb(133, 131, 131)";
  document.getElementById("s-page").style.backgroundColor = "#EFEFEF";
}

function teamManagerPage() {
  resetButtonStyles();
  let teamManagerButton = document.getElementById("tm-page");
  teamManagerButton.style.color = "black";
  teamManagerButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".team-managers").style.display = "block";
  document.querySelector(".participants").style.display = "none";
  document.querySelector(".spectators").style.display = "none";
}

function participantsPage() {
  resetButtonStyles();
  let participantsButton = document.getElementById("p-page");
  participantsButton.style.color = "black";
  participantsButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".team-managers").style.display = "none";
  document.querySelector(".participants").style.display = "block";
  document.querySelector(".spectators").style.display = "none";
}

function spectatorsPage() {
  resetButtonStyles();
  let spectatorsButton = document.getElementById("s-page");
  spectatorsButton.style.color = "black";
  spectatorsButton.style.backgroundColor = "#b1b1b1";

  document.querySelector(".team-managers").style.display = "none";
  document.querySelector(".participants").style.display = "none";
  document.querySelector(".spectators").style.display = "block";
}
function editModal() {
  let activeModal = document.querySelector(".modal.show");
  if (!activeModal) return;

  let inputColumns = activeModal.querySelectorAll(
    ".row.flex-nowrap .col:nth-child(2)"
  );

  inputColumns.forEach((col) => {
    if (col.querySelector("input[type='checkbox']")) {
      return;
    }
    let text = col.textContent.trim();
    col.dataset.originalValue = text;

    if (
      text === "he/him" ||
      text === "she/her" ||
      text === "they/them" ||
      text === "I prefer not to answer"
    ) {
      const pronounsSelect = document.createElement("select");
      pronounsSelect.className = "form-select form-select-md";
      pronounsSelect.style.width = "100px";
      pronounsSelect.style.fontSize = "15px";
      pronounsSelect.style.marginLeft = "30px";
      ["he/him", "she/her", "they/them", "I prefer not to answer"].forEach(
        (optionText) => {
          const option = document.createElement("option");
          option.value = optionText;
          option.textContent = optionText;
          pronounsSelect.appendChild(option);
        }
      );
      pronounsSelect.value = text;
      col.innerHTML = "";
      col.appendChild(pronounsSelect);
    } else if (text === "Yes" || text === "No") {
      const yesNoSelect = document.createElement("select");
      yesNoSelect.className = "form-select form-select-md";
      yesNoSelect.style.fontSize = "15px";
      yesNoSelect.style.width = "100px";
      yesNoSelect.style.marginLeft = "30px";
      ["Yes", "No"].forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        yesNoSelect.appendChild(option);
      });
      yesNoSelect.value = text;
      col.innerHTML = "";
      col.appendChild(yesNoSelect);
    } else if (!isNaN(text)) {
      const numberInput = document.createElement("input");
      numberInput.type = "number";
      numberInput.className = "form-control";
      numberInput.value = text;
      numberInput.style.width = "100px";
      numberInput.style.marginLeft = "30px";
      col.innerHTML = "";
      col.appendChild(numberInput);
    }
  });

  let editButton = activeModal.querySelector(
    "#edit-button-footer button:nth-child(2)"
  );
  editButton.textContent = "Save";
  editButton.setAttribute("onclick", "saveModal()");
}

function saveModal() {
  let activeModal = document.querySelector(".modal.show");
  if (!activeModal) return;

  let inputColumns = activeModal.querySelectorAll(
    ".row.flex-nowrap .col:nth-child(2)"
  );

  inputColumns.forEach((col) => {
    if (col.querySelector("input[type='checkbox']")) {
      return;
    }
    let newValue;
    let inputElement = col.querySelector("select, input");

    if (inputElement) {
      newValue = inputElement.value;
    } else {
      newValue = col.dataset.originalValue;
    }

    col.innerHTML = newValue;
  });

  let saveButton = activeModal.querySelector(
    "#edit-button-footer button:nth-child(2)"
  );
  saveButton.textContent = "Edit";
  saveButton.setAttribute("onclick", "editModal()");
}
function addModal() {
  const participantsColumn = document.querySelector("#participants-modal");
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "mobile-tm-row";

  const modalButton = document.createElement("button");
  modalButton.className = "mobile-managers";
  modalButton.setAttribute("data-bs-toggle", "modal");

  const modalId = `participantModal-${Date.now()}`;
  modalButton.setAttribute("data-bs-target", `#${modalId}`);

  const nameSpan = document.createElement("span");
  nameSpan.contentEditable = true;
  nameSpan.textContent = "Enter Name";

  const arrowSpan = document.createElement("span");
  arrowSpan.innerHTML = "&#8594;";

  modalButton.appendChild(nameSpan);
  modalButton.appendChild(arrowSpan);
  buttonContainer.appendChild(modalButton);
  participantsColumn.appendChild(buttonContainer);

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = modalId;
  modal.setAttribute("tabindex", "-1");

  modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Enter Name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container text-center overflow-auto" id="tm-modal">
                            <div class="row flex-nowrap">
                                <div class="col">Attending?</div>
                                <div class="col"><input type="checkbox" class="attendee-check"></div>
                            </div>
                            <div class="row flex-nowrap">
                                <div class="col">Pronouns:</div>
                                <div class="col" id="input-column">he/him</div>
                            </div>
                            <div class="row flex-nowrap">
                                <div class="col">First Year of DI?</div>
                                <div class="col" id="input-column">Yes</div>
                            </div>
                            <div class="row flex-nowrap">
                                <div class="col">Age on 04/17/2024</div>
                                <div class="col" id="input-column">17</div>
                            </div>
                            <div class="row flex-nowrap">
                                <div class="col">First GF?</div>
                                <div class="col" id="input-column">Yes</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" id="edit-button-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="editModal()">Edit</button>
                    </div>
                </div>
            </div>
        `;

  document.body.appendChild(modal);

  const bootstrapModal = new bootstrap.Modal(modal);

  modalButton.addEventListener("click", () => {
    bootstrapModal.show();
  });

  const modalTitle = modal.querySelector(".modal-title");

  nameSpan.addEventListener("input", function () {
    modalTitle.textContent = this.textContent.trim() || "Enter Name";
  });

  nameSpan.addEventListener("blur", function () {
    if (this.textContent.trim() === "") {
      this.textContent = "Enter Name";
      modalTitle.textContent = "Enter Name";
    }
  });
}
