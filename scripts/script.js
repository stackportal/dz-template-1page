// Testimonials Toggler functionality
const all_togglers = document.querySelectorAll(".toggler");
const all_testimonial = document.querySelectorAll(".testimonial");

all_togglers.forEach((toggler, index) => {
  toggler.addEventListener("click", function () {
    all_togglers.forEach((toggler2) => {
      toggler2.classList.remove("active");
      toggler2.classList.add("inactive");
    });
    this.classList.add("active");
    this.classList.remove("inactive");

    all_testimonial.forEach((testimonial) => {
      testimonial.classList.remove("show");
      testimonial.classList.add("hide");
    });
    all_testimonial[index].classList.remove("hide");
    all_testimonial[index].classList.add("show");
  });
});

const login_button = document.querySelector(".login-button");
const login_modal = document.querySelector(".login-modal");
const loginOverlay = document.querySelector(".login-modal-overlay");
login_button.addEventListener("click", () => {
  login_modal.style.transform = "scaleX(1)";
});
loginOverlay.addEventListener("click", () => {
  login_modal.style.transform = "scaleX(0)";
});

// Register Modal Popup
const RMC = document.querySelector(".register-modals-container");
const RM = document.querySelector(".register-modal");
const registerModals = document.querySelector(".register-modals");

function showRegisterModals() {
  registerModals.style.transform = "scaleX(1)";
}
function hideRegisterModals() {
  registerModals.style.transform = "scaleX(0)";
  RMC.scrollLeft = 0;
}

// Register Modal Slider
function register_back() {
  RMC.scrollLeft -= RM.clientWidth;
}
function register_next() {
  RMC.scrollLeft += RM.clientWidth;
}
