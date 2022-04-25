//  Accordion
const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");

accSingleTriggers.forEach(trigger =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}

// login modal
var modal = document.getElementById("login_modal");
var signUp_modal = document.getElementById("signUp_modal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == signUp_modal) {
    signUp_modal.style.display = "none";
  }
};
