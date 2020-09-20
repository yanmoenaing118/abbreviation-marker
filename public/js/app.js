const abbrInput = document.getElementById("abbr");
const description_label = document.querySelector(".description_label");

if (abbrInput) {
  abbrInput.addEventListener("change", function (e) {
    description_label.textContent = `Enter description for ${e.target.value}`;
  });
}
