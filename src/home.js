import fes_logo from "./assets/images/fes_logo.png";
import turkish_chef from "./assets/images/turkish_chef.png";
import background_1 from "./assets/images/background_images/background_1.jpeg";
import background_2 from "./assets/images/background_images/background_2.jpeg";
import background_3 from "./assets/images/background_images/background_3.jpeg";
import background_4 from "./assets/images/background_images/background_4.jpeg";
import background_5 from "./assets/images/background_images/background_5.jpeg";
import github_logo from "./assets/images/icons/github-64.png";


console.log("hallo from home.js");

const mainContainer = document.querySelector("body").firstElementChild;

export function createHeader() {
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

    img.addEventListener("click", () => {
      location.href = "./index.html";
    });

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant_name");
    restaurantName.innerHTML = "PASHA DONER ";
    header_left.appendChild(restaurantName);
  })();

  (function createHeaderRigth() {
    const header_right = document.createElement("div");
    header_right.classList.add("header_right");
    header.appendChild(header_right);

    const link_1 = document.createElement("a");
    link_1.innerHTML = "Home";
    link_1.setAttribute("href", "./index.html");
    header_right.appendChild(link_1);

    const link_2 = document.createElement("a");
    link_2.innerHTML = "Menu";
    link_2.setAttribute("href", "./menu.html");
    header_right.appendChild(link_2);

    const link_3 = document.createElement("a");
    link_3.innerHTML = "Contact";
    link_3.setAttribute("href", "./contact.html");
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

  button.addEventListener("click", () => {
    location.href = "./menu.html";
  });
}

export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer_container");
  footer.innerHTML = "Here I practiced generating HTML files with Javascript and bundling with Webpack&nbsp;&nbsp;"
  mainContainer.appendChild(footer);

  const footerGithubLink = document.createElement("a")
  footerGithubLink.setAttribute("href", "https://github.com/berkgirgin/Restaurant_Page");
  footer.appendChild(footerGithubLink);

  const footerGithubLogo = document.createElement("img");
  footerGithubLogo.setAttribute("src", github_logo);
  footerGithubLogo.setAttribute("alt", "git repo")
  footerGithubLink.appendChild(footerGithubLogo)

}

function changeImageAndMessage() {
  const backgroundElement = document.querySelector(".first_block_main");
  const restaurantSlogan = document.querySelector(".restaurant_slogan");

  const restaurantSloganTexts = {
    text_1: "Best Turkish Food in Town",
    text_2: "Authentic Sauces",
    text_3: "No addition, only Meat",
    text_4: "Elite Ambiance",
    text_5: "Daily Fresh Salad",
  };

  let number = 2;

  function changeFunction() {
    const myBackgrounds = {
      myBackground1: background_1,
      myBackground2: background_2,
      myBackground3: background_3,
      myBackground4: background_4,
      myBackground5: background_5,
    };

    restaurantSlogan.textContent = "";
    restaurantSlogan.style.opacity = "0";
    restaurantSlogan.style.transition = "0ms";

    let selectedText = `text_${number}`;
    restaurantSlogan.textContent = restaurantSloganTexts[selectedText];
    setTimeout(() => {
      restaurantSlogan.style.transition = "2000ms";
      restaurantSlogan.style.opacity = "1";
    }, 2);

    backgroundElement.style.transition = "1200ms";
    let selectedBackground = myBackgrounds[`myBackground${number}`];
    backgroundElement.style.backgroundImage = `url(${selectedBackground})`;

    number++;
    if (number > 5) {
      number = 1;
    }
  }

  setInterval(() => {
    changeFunction();
  }, 7000);
}

export function createHomePage() {
  createHeader();
  createContentBlock();
  changeImageAndMessage();
  createFooter();
}
