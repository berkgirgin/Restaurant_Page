import createHomePage from "./website_home_page.js";
import "./styles/styles.css";
import background_1 from "./assets/images/background_images/background_1.jpeg";
import background_2 from "./assets/images/background_images/background_2.jpeg";
import background_3 from "./assets/images/background_images/background_3.jpeg";
import background_4 from "./assets/images/background_images/background_4.jpeg";
import background_5 from "./assets/images/background_images/background_5.jpeg";

createHomePage();

// this changes the background image and message on the home page
(function changeImageAndMessage() {
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
})();
