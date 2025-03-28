const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

//tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  //deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-softRed", "border-b-4");
  });

  //hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //active a new tab and panel based on the data-target

  e.target.classList.add("border-softRed", "border-b-4");

  const classString = e.target.getAttribute("data-target");

  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

//hamburger button listener
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  //   if(menu.classList.contains("flex")){
  //     logo.setAttribute("src", "/images/")
  //   }
}
