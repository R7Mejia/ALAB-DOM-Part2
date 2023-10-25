
const mainEl = document.querySelector("main");
//adding a class; this flex-ctr will center the h1
mainEl.classList.add("flex-ctr");
const h1Element = document.createElement("h1");
h1Element.textContent = "DOM Manipulation";

//Append/attach the h1 content to the main

mainEl.appendChild(h1Element);
h1Element.style.color = "red";
mainEl.style.backgroundColor = "#4a4e4d";

//step 2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
//Add a class of flex-around to the topMenuEl (classList + .add, is used to add classes)
topMenuEl.classList.add("flex-around");

//Part 3, adding menu buttons
// Menu data structure

const menuLinks = [
  { text: "ABOUT", href: "/about.html" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
//access the  topMenu element from HTML
const topMenu = document.querySelector("#top-menu");
const topMenuLinks = document.querySelectorAll("#top-menu a");
//iterate over the entire menuLinks array and for each link create an <a> element that connects to the arrays buttons/hrefs
menuLinks.forEach(function (link) {
    const anchorTag = document.createElement("a"); //creates an anchor (<a>)  tag
    //link the arrays/href's
    anchorTag.textContent = link.text;
    anchorTag.href = link.href;
    anchorTag.style.color = "yellow"; //Just added color. Mamma mia, ragazzi è una cosa bellissima!
    //the anchorTag element will be displayed as a child of the topMenu element
    topMenu.appendChild(anchorTag);
});
topMenuEl.addEventListener("click", function (event) {
  // Prevent the default link (html?).
  //event.preventDefault();

  // Return if the element clicked was not a <a> element.
  if (event.target.tagName !== "a") {
    return;
  }

  // Get the content of the clicked <a> element.
  const linkContent = event.target.textContent;

  // Log the content of the <a> element to the console.
  console.log(linkContent);
});
///////////////////////SUB-MENU/////////////////
//////////////////////STEP ONE/////////////////////
//Setting the sub-menu

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add('flex-around');
// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
// Set the CSS position property of subMenuEl to the value of absolute.
//subMenuEl.style.position = "absolute";//this one here, hides the submenu from the screen
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;

//////////////////STEP 2////////////////
/////////////////ADDING INTERACTION////





//////////////////STEP 2////////////////
/////////////////ADDING INTERACTION////

/*
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
//adding a class; this flex-ctr will center the h1
mainEl.classList.add("flex-ctr");
const h1Element = document.createElement("h1");
h1Element.textContent = "DOM Manipulation";

//Append/attach the h1 content to the main

mainEl.appendChild(h1Element);
h1Element.style.color = "red";
mainEl.style.backgroundColor = "#4a4e4d";

//step 2

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (elementClicked.tagName !== "A") {
    return;
  }
  //console.log(event.target.textContent);
});
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
//Add a class of flex-around to the topMenuEl (classList + .add, is used to add classes)
topMenuEl.classList.add("flex-around");

//Part 3, adding menu buttons
// Menu data structure
//access the  topMenu element from HTML
const topMenu = document.querySelector("#top-menu");
/*
const menuLinks = [
    { text: "ABOUT", href: "/about" },
    { text: "CATALOG", href: "/catalog" },
    { text: "ORDERS", href: "/orders" },
    { text: "ACCOUNT", href: "/account" },
];
*/
//iterate over the entire menuLinks array and for each link create an <a> element that connects to the arrays buttons/hrefs
//menuLinks.forEach(function (link) {
/*
for (let j = 0; j <= menuLinks.length; j++) {
  //THE END OF THE TESTING PART
  const anchorTag = document.createElement("a"); //creates an anchor (<a>)  tag
  //link the arrays/href's
  const link = menuLinks[j];
  anchorTag.textContent = link.text;
  anchorTag.href = link.href;
  anchorTag.style.color = "yellow"; //Just added color. Mamma mia, ragazzi è una cosa bellissima!
  //the anchorTag element will be displayed as a child of the topMenu element
  topMenu.appendChild(anchorTag);
}

///////////////////////EXERCISE TWO/////////////////
//////////////////////STEP ONE/////////////////////
//Setting the sub-menu

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add("flex-around");
// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute"; //this one here, hides the submenu from the screen
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;*/
