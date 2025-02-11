document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".body-button");
  const mainContent = document.querySelector(".main");

  const createFeatureSection = (id) => {
    const section = document.createElement("div");
    section.className = "features-section";
    section.id = `${id}-features`;
    section.style.display = "none";

    section.innerHTML = `
        <div class="body-header">
          <h1 class="header">Team Registration: (127-36892) 7 Kids and a TM/What's The First Rule of DI?</h1>
          <div class="border"></div>
        </div>
        <h4>${id.charAt(0).toUpperCase() + id.slice(1)} Features</h4>
      `;

    return section;
  };

  buttons.forEach((button) => {
    if (
      button.id !== "basic-info" &&
      !document.getElementById(`${button.id}-features`)
    ) {
      const featureSection = createFeatureSection(button.id);
      mainContent.appendChild(featureSection);
    }
  });

  const featureSections = document.querySelectorAll(
    ".features-section, .basic-info-features"
  );

  document.getElementById("basic-info-features").style.display = "block";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const featureId = `${button.id}-features`;

      featureSections.forEach((section) => {
        section.style.display = "none";
      });

      const selectedSection = document.getElementById(featureId);
      if (selectedSection) {
        selectedSection.style.display = "block";
      }
    });
  });
});

function buttonColor() {
  const buttons = document.querySelectorAll(".body-button");

  const basicInfoButton = document.getElementById("basic-info");
  if (basicInfoButton) {
    basicInfoButton.style.backgroundColor = "white";
    basicInfoButton.style.color = "#222529";
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => {
        btn.style.backgroundColor = "#222529";
        btn.style.color = "white";
      });

      this.style.backgroundColor = "white";
      this.style.color = "#222529";
    });
  });
}

document.addEventListener("DOMContentLoaded", buttonColor);
