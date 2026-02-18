const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const button = document.querySelector("#fake-submit");
const status = document.querySelector("#form-status");

if (button && status) {
  button.addEventListener("click", () => {
    status.textContent = "Wire this button to your real API endpoint before launch.";
  });
}
