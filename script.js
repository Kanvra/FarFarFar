const menuId = document.getElementById("id-menu");
const menuList = document.getElementById("menu-list");

menuId.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});