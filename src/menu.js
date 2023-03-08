import "./styles/styles.css";
import "./styles/menu.css";

import menu_doner from "./assets/images/menu_images/menu_doner.png";
import menu_durum from "./assets/images/menu_images/menu_durum.png";
import menu_doner_box from "./assets/images/menu_images/menu_doner_box.png";
import menu_lahmacun_durum from "./assets/images/menu_images/menu_lahmacun_durum.png";
import menu_doner_teller from "./assets/images/menu_images/menu_doner_teller.png";
import menu_doner_pizza from "./assets/images/menu_images/menu_doner_pizza.png";
import sauce_garlic from "./assets/images/menu_images/sauce_garlic.png";
import sauce_hot from "./assets/images/menu_images/sauce_hot.png";
import approved_logo from "./assets/images/approved_logo.jpeg";

import { createHeader } from "./home.js";

// console.log("hallo from menu.js");
// console.log("2hallo from menu.js");

const mainContainer = document.querySelector(".menu_main_container");

function createMenuContent() {
  function createMenuItem(src, item_name, item_price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu_item");
    menuItemsContainer.appendChild(menuItem);

    const img = document.createElement("img");
    img.classList.add("item_photo");
    img.setAttribute("alt", "item photo");
    img.setAttribute("src", `${src}`);
    menuItem.appendChild(img);

    const itemName = document.createElement("div");
    itemName.classList.add("item_name");
    itemName.innerHTML = item_name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item_price");
    itemPrice.innerHTML = item_price;
    menuItem.appendChild(itemPrice);

    menuItem.addEventListener("click", (element) => {
      if (menuItem.querySelector(".approved_logo")) {
        menuItem.querySelector(".approved_logo").remove();
      } else {
        const approvedLogo = document.createElement("img");
        approvedLogo.classList.add("approved_logo");
        approvedLogo.setAttribute("alt", "approved logo");
        approvedLogo.setAttribute("src", `${approved_logo}`);
        menuItem.appendChild(approvedLogo);
      }
    });
  }

  function createSauceItem(src, sauce_name) {
    const sauceItem = document.createElement("div");
    sauceItem.classList.add("sauce_item");
    menuSauces.appendChild(sauceItem);

    const img = document.createElement("img");
    img.setAttribute("alt", "sauce item");
    img.setAttribute("src", `${src}`);
    sauceItem.appendChild(img);

    const sauceName = document.createElement("div");
    sauceName.classList.add("sauce_name");
    sauceName.innerHTML = sauce_name;
    sauceItem.appendChild(sauceName);
  }

  const h2_dönerVariants = document.createElement("h2");
  h2_dönerVariants.innerHTML = "Döner Variants";
  mainContainer.appendChild(h2_dönerVariants);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu_items_container");
  mainContainer.appendChild(menuItemsContainer);

  // creating Menu Items
  // img, name and price
  const menuItemsArray = [
    [menu_doner, "Döner", "6€"],
    [menu_durum, "Dürüm", "7€"],
    [menu_doner_box, "Döner Box", "6€"],
    [menu_lahmacun_durum, "Lahmacun Dürüm", "7€"],
    [menu_doner_teller, "Döner Teller", "11€"],
    [menu_doner_pizza, "Pizza Döner", "9€"],
  ];

  menuItemsArray.forEach((element) => {
    createMenuItem(...element);
  });

  const menuSauceItems = document.createElement("div");
  menuSauceItems.classList.add("menu_sauce_items");
  menuItemsContainer.appendChild(menuSauceItems);

  const h3_ourSauces = document.createElement("h3");
  h3_ourSauces.innerHTML = "Our sauces";
  menuSauceItems.appendChild(h3_ourSauces);

  const menuSauces = document.createElement("div");
  menuSauces.classList.add("menu_sauces");
  menuSauceItems.appendChild(menuSauces);

  // creating Sauce Items
  // img and name
  const menuSaucesArray = [
    [sauce_garlic, "Garlic"],
    [sauce_hot, "Spicy"],
  ];

  menuSaucesArray.forEach((element) => {
    createSauceItem(...element);
  });
}

function createMenuPage() {
  createHeader();
  createMenuContent();
}

createMenuPage();
