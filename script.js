const burgerSwitcher = document.querySelector(".hamburger_menu-checkbox");
const overlay = document.querySelector(".overlay");
const arrowElem = document.querySelector(".arrow");
const clientsElem = document.querySelector(".clients");
const overlayKontaktElem = document.querySelector("#overlay-kontakt");
const kontaktSectionElem = document.querySelector(".kontakt");

const openOverlay = () => {
  overlay.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
};

const closeOverlay = () => {
  overlay.classList.add("hidden");
  overlay.style.display = "block";
  document.body.style.overflowY = "unset";
};

const arrowScroll = () => clientsElem.scrollIntoView({ behavior: "smooth" });

const kontaktScroll = () => {
  burgerSwitcher.checked = false;
  closeOverlay();
  setTimeout(() => {
    kontaktSectionElem.scrollIntoView({ behavior: "smooth" });
  }, 500);
};
const switchNavigation = () => {
  burgerSwitcher.checked ? openOverlay() : closeOverlay();
};
burgerSwitcher.addEventListener("click", switchNavigation);
arrowElem.addEventListener("click", arrowScroll);
overlayKontaktElem.addEventListener("click", kontaktScroll);
