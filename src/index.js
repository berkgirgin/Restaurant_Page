import "./styles.css";
import printMe from "./print.js";
import background_1 from "./assets/images/background_images/background_1.jpeg";
import background_2 from "./assets/images/background_images/background_2.jpeg";
import background_3 from "./assets/images/background_images/background_3.jpeg";
import background_4 from "./assets/images/background_images/background_4.jpeg";
import background_5 from "./assets/images/background_images/background_5.jpeg";

const myBackgrounds = {
  myBackground1: background_1,
  myBackground2: background_2,
  myBackground3: background_3,
  myBackground4: background_4,
  myBackground5: background_5,
};

// function createElement(
//   element_type,
//   element_text_context,
//   element_classList,
//   element_parent
// ) {
//   const div = document.createElement("div");
//   div.textContent = "";
//   div.classList.add();
//   document.body.appendChild(div);
// }

// this changes the background image and message on the home page
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
    backgroundElement.style.transition = "1500ms";
    restaurantSlogan.style.transition = "1500ms";

    let selectedText = `text_${number}`;
    restaurantSlogan.textContent = restaurantSloganTexts[selectedText];

    let selectedBackground = myBackgrounds[`myBackground${number}`];
    backgroundElement.style.backgroundImage = `url(${selectedBackground})`;

    number++;
    if (number > 5) {
      number = 1;
    }
  }

  setInterval(() => {
    changeFunction();
  }, 3000);
}

changeImageAndMessage();
