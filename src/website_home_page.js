import fes_logo from "./assets/images/fes_logo.png";
import turkish_chef from "./assets/images/turkish_chef.png";

const mainContainer = document.querySelector(".first_block_main");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  mainContainer.appendChild(header);

  (function createHeaderLeft() {
    const header_left = document.createElement("div");
    header_left.classList.add("header_left");
    header.appendChild(header_left);

    const img = document.createElement("img");
    img.classList.add(".header_logo");
    img.setAttribute("src", fes_logo);
    img.setAttribute("alt", "header logo");
    header_left.appendChild(img);

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant_name");
    restaurantName.innerHTML = "Pasha Döner";
    header_left.appendChild(restaurantName);
  })();

  (function createHeaderRigth() {
    const header_right = document.createElement("div");
    header_right.classList.add("header_right");
    header.appendChild(header_right);

    const link_1 = document.createElement("a");
    link_1.setAttribute("href", "#");
    link_1.innerHTML = "Home";
    header_right.appendChild(link_1);

    const link_2 = document.createElement("a");
    link_2.setAttribute("href", "#");
    link_2.innerHTML = "Menu";
    header_right.appendChild(link_2);

    const link_3 = document.createElement("a");
    link_3.setAttribute("href", "#");
    link_3.innerHTML = "Contact";
    header_right.appendChild(link_3);
  })();
}

function createContentBlock() {
  const contentBlock = document.createElement("div");
  contentBlock.classList.add("first_block_content");
  mainContainer.appendChild(contentBlock);

  const img = document.createElement("img");
  img.setAttribute("src", turkish_chef);
  img.setAttribute("alt", "restaurant logo");
  contentBlock.appendChild(img);

  const restaurantSlogan = document.createElement("div");
  restaurantSlogan.classList.add("restaurant_slogan");
  restaurantSlogan.innerHTML = "Best Turkish Food in Town";
  contentBlock.appendChild(restaurantSlogan);

  const button = document.createElement("button");
  button.innerHTML = "Check our selection!";
  contentBlock.appendChild(button);
}

function createHomePage() {
  createHeader();
  createContentBlock();
}

export default createHomePage;
