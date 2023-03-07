import "./styles/styles.css";
import "./styles/contact.css";

import location_icon from "./assets/images/icons/location_icon.png";
import opening_icon from "./assets/images/icons/opening_icon.png";
import phone_icon from "./assets/images/icons/phone_icon.png";
import message_icon from "./assets/images/icons/message_icon.png";

import { createHeader } from "./home.js";

const mainContainer = document.querySelector(".contact_main_container");
createHeader();

const contactContainer = document.createElement("div");
contactContainer.classList.add("contact_container");
mainContainer.appendChild(contactContainer);

const h2_contactUs = document.createElement("h2");
h2_contactUs.innerHTML = "Contact us";
contactContainer.appendChild(h2_contactUs);

const contactContentContainer = document.createElement("div");
contactContentContainer.classList.add("contact_content_container");
contactContainer.appendChild(contactContentContainer);

// ******************************
// Adding the top content for the box
// ******************************

// Location Container
const locationContainer = document.createElement("div");
locationContainer.classList.add("location_container");
contactContentContainer.appendChild(locationContainer);

const img_locationContainer = document.createElement("img");
img_locationContainer.setAttribute("alt", "location image");
img_locationContainer.setAttribute("src", location_icon);
locationContainer.appendChild(img_locationContainer);

const div_locationContainer = document.createElement("div");
div_locationContainer.classList.add("location");
div_locationContainer.innerHTML = "Kottbusser Tor 35, 10999 Berlin";
locationContainer.appendChild(div_locationContainer);
// ******************

// Opening Times Container
const openingTimesContainer = document.createElement("div");
openingTimesContainer.classList.add("opening_times_container");
contactContentContainer.appendChild(openingTimesContainer);

const img_openingTimesContainer = document.createElement("img");
img_openingTimesContainer.setAttribute("alt", "opening image");
img_openingTimesContainer.setAttribute("src", opening_icon);
openingTimesContainer.appendChild(img_openingTimesContainer);

const div_openingTimesContainer = document.createElement("div");
div_openingTimesContainer.classList.add("opening_times");
openingTimesContainer.appendChild(div_openingTimesContainer);

const div1_div_openingTimesContainer = document.createElement("div");
div1_div_openingTimesContainer.innerHTML = "Sunday-Thursday: 8am-8pm";
div_openingTimesContainer.appendChild(div1_div_openingTimesContainer);

const div2_div_openingTimesContainer = document.createElement("div");
div2_div_openingTimesContainer.innerHTML = "Friday-Saturday: 8am-11pm";
div_openingTimesContainer.appendChild(div2_div_openingTimesContainer);
// ******************

// Phone Number Container
const phoneNumberContainer = document.createElement("div");
phoneNumberContainer.classList.add("phone_number_container");
contactContentContainer.appendChild(phoneNumberContainer);

const img_phoneNumberContainer = document.createElement("img");
img_phoneNumberContainer.setAttribute("alt", "phone image");
img_phoneNumberContainer.setAttribute("src", phone_icon);
phoneNumberContainer.appendChild(img_phoneNumberContainer);

const div_phoneNumberContainer = document.createElement("div");
div_phoneNumberContainer.classList.add("phone_number");
div_phoneNumberContainer.innerHTML = "(070)-888 5555";
phoneNumberContainer.appendChild(div_phoneNumberContainer);
// ******************

// Message us Container
const messageUsContainer = document.createElement("div");
messageUsContainer.classList.add("message_us_container");
contactContentContainer.appendChild(messageUsContainer);

const img_messageUsContainer = document.createElement("img");
img_messageUsContainer.setAttribute("alt", "message image");
img_messageUsContainer.setAttribute("src", message_icon);
messageUsContainer.appendChild(img_messageUsContainer);

const div_messageUsContainer = document.createElement("div");
div_messageUsContainer.classList.add("message_us");
div_messageUsContainer.innerHTML = "Message us";
messageUsContainer.appendChild(div_messageUsContainer);
// ******************

// ******************************
// ******************************

// ******************************
// Adding the form for the box
// ******************************

function createFormRow(className) {
  const formRow = document.createElement("div");
  formRow.classList.add("form_row");
  formRow.classList.add(className);
  contactForm.appendChild(formRow);
}

const contactForm = document.createElement("form");
contactForm.classList.add("contact_form");
contactForm.setAttribute("action", "");
contactContentContainer.appendChild(contactForm);

// Form row: First name
createFormRow("first_name");
const formRowFirstName = document.querySelector(".form_row.first_name");

const label_firstName = document.createElement("label");
label_firstName.innerHTML = "Full Name:";
label_firstName.classList.add("first_name");
formRowFirstName.appendChild(label_firstName);

const input_firstName = document.createElement("input");
input_firstName.setAttribute("type", "text");
input_firstName.setAttribute("name", "full_name");
input_firstName.setAttribute("id", "full_name");
input_firstName.setAttribute("maxlength", "30");
formRowFirstName.appendChild(input_firstName);
// ********************

// Form row: Email
createFormRow("email");
const formRowEmail = document.querySelector(".form_row.email");

const label_email = document.createElement("label");
label_email.innerHTML = "Email*:";
label_email.classList.add("email");
formRowEmail.appendChild(label_email);

const input_email = document.createElement("input");
input_email.setAttribute("type", "email");
input_email.setAttribute("name", "email");
input_email.setAttribute("id", "email");
input_email.setAttribute("maxlength", "30");
input_email.required = true;

formRowEmail.appendChild(input_email);
// ********************

// Form row: Text Area
createFormRow("text_area");
const formTextArea = document.querySelector(".form_row.text_area");

const label_textArea = document.createElement("text_area");
label_textArea.innerHTML = "Your message:";
label_textArea.classList.add("text_area");
formTextArea.appendChild(label_textArea);

const input_textArea = document.createElement("input");
input_textArea.setAttribute("id", "text_area");
input_textArea.setAttribute("name", "text_area");
input_textArea.setAttribute("rows", "5");
input_textArea.setAttribute("cols", "33");

formTextArea.appendChild(input_textArea);
// ********************

// Form Button
const formButton = document.createElement("button");
formButton.innerHTML = "Submit";
formButton.setAttribute("type", "submit");

contactForm.appendChild(formButton);
// ***********

// ******************************
// ******************************
