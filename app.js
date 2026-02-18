const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const leadForm = document.querySelector("#lead-form");
const leadMessage = document.querySelector("#lead-message");

if (leadForm && leadMessage) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    leadMessage.classList.add("success");
    leadMessage.textContent = "Thanks. You are on the early-access list. We will contact you at launch.";
    leadForm.reset();
  });
}

const portalForm = document.querySelector("#portal-form");
const portalMessage = document.querySelector("#portal-message");

if (portalForm && portalMessage) {
  portalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    portalMessage.classList.remove("success");
    portalMessage.textContent = "Portal login is invite-only right now. Your access admin can enable your account.";
  });
}
