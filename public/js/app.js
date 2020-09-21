const abbrInput = document.getElementById("abbr");
const description_label = document.querySelector(".description_label");

const abbrDelBtn = document.querySelector(".btn__action--delete");

document.body.requestFullscreen();

if (abbrInput) {
  abbrInput.addEventListener("change", function (e) {
    description_label.textContent = `Enter description for ${e.target.value}`;
  });
}

if (abbrDelBtn) {
  console.log(abbrDelBtn);
  abbrDelBtn.addEventListener("click", async (e) => {
    console.log("clicked");
  });
}

const deleteAbbr = async (id) => {
  try {
    console.log("what");
    await fetch(`http://localhost:3000/api/v1/abbreviations/{id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
