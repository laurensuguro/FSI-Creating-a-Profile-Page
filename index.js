let content = document.querySelector(".js-generated.content");

function createList(x) {
  return;
}

//Rizzo header
let header = document.createElement("h1");

header.setAttribute("class", "dog-name");

header.append("Rizzo");

content.append(header);

//Image

let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);
let link = document.createElement("img");
link.setAttribute("class", "dog-image");
link.setAttribute("src", "./assets/rizzo.jpg");
dogContent.append(link);

//description

let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);

let header3 = document.createElement("h3");
header3.append("Description:");
dogDetails.append(header3);

let description = document.createElement("p");
description.textContent =
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(description);

//Feeding Times List
let feedingTimes = document.createElement("h3");
feedingTimes.textContent = "Feeding Times:";
dogDetails.append(feedingTimes);

let list = document.createElement("ul");

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");

listItem1.textContent = "9:00am";
listItem2.textContent = "12:00pm";
listItem3.textContent = "5:00pm";

list.append(listItem1, listItem2, listItem3);

dogDetails.append(list);
