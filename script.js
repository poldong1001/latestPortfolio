var menuList = document.getElementById("menuList");
var menuBars = document.getElementById("menuBars");

menuBars.addEventListener("mouseover", function () {
  // Hide the menu
  menuBars.style.display = "none";
  //   menuList.style.color = "green";
});

function toggleMenu() {
  if (getComputedStyle(menuList).display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
}

// window.addEventListener("resize", function () {
//   // Check if the screen width is 1200px or less
//   if (window.innerWidth <= 1200) {
//     // Hide the menu if the screen width is 1200px or less
//     menuList.style.display = "none";
//   }
// });

// Add an event listener to detect when the mouse leaves the menu area

// window.alert("hello");
// function toggleMenu() {
//   var logoName = document.getElementById("logoName");
//   if (logoName.style.color === "green") {
//     logoName.style.color = "blue";
//   } else {
//     logoName.style.color = "green";
//   }
// }

// function toggleMenu() {
//   var logoName = document.getElementById("logoName");
//   if (introMessage.style.color === "green") {
//     introMessage.style.color = "blue";
//   } else {
//     introMessage.style.color = "green";
//   }
// }

// function toggleMenu() {
//   var menuBars = document.getElementById("menuBars");
//   if (menuList.style.display === "none") {
//     menuList.style.display = "none";
//   } else {
//     menuList.style.display = "none";
//   }
// }
