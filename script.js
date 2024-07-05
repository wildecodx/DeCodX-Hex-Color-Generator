"use strict";

const cardEl = document.querySelectorAll(".card");
const colorCode = document.querySelectorAll(".color-code");
const lockBtn = document.querySelectorAll(".lock-btn");
const generateBtn = document.querySelector(".generate-mobile");

function generateColor() {
  let random = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${random}`;
}

cardEl.forEach((card) => {
  card.addEventListener("click", function (e) {
    const btn = e.target.closest(".lock-btn");

    if (!btn) return;

    if (btn.dataset.status === "unlock") {
      btn.dataset.status = "lock";
    } else {
      btn.dataset.status = "unlock";
      card.classList.remove("is-locked");
    }

    // when lock
    btn.dataset.status === "lock" ? card.classList.add("is-locked") : card;
  });
});

function forDisplaying(color, text) {
  color.forEach((c, i) => {
    let getColorCode = "";

    if (c.classList.contains("is-locked")) {
      c.style.backgroundColor;
      colorCode[i].innerHTML;
    } else {
      getColorCode = c.style.backgroundColor = generateColor();
      colorCode[i].textContent = getColorCode;
    }
  });

  text.forEach((item) => {
    item.addEventListener("click", () => {
      navigator.clipboard.writeText(item.innerHTML);
    });
  });
}

forDisplaying(cardEl, colorCode);

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    const help = document.querySelector(".help-box");
    help.classList.toggle("show");
  });
});

generateBtn.addEventListener("click", () => {
  forDisplaying(cardEl, colorCode);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === " ") {
    forDisplaying(cardEl, colorCode);
  }
});
