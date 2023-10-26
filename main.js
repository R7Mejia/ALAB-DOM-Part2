
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
//access the  topMenu element from HTML
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.backgroundColor = "#0e9aa7";
//Add a class of flex-around to the topMenuEl (classList + .add, is used to add classes)
topMenuEl.classList.add("flex-around");

//Part 3, adding menu buttons

//iterate over the entire menuLinks array and for each link create an <a> element that connects to the arrays buttons/hrefs
menuLinks.forEach(function (link) {
  const anchorTag = document.createElement("a"); //creates an anchor (<a>)  tag
  //link the arrays/href's
  anchorTag.textContent = link.text;
  anchorTag.href = link.href;
  anchorTag.style.color = "yellow"; //Just added color. Mamma mia, ragazzi è una cosa bellissima!
  anchorTag.classList.add("top-link")//
  //the anchorTag element will be displayed as a child of the topMenu element
  topMenuEl.appendChild(anchorTag);
  
});

//
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'const(--sub-menu-bg)'
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";//this one here, hides the submenu from the screen
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;

const topMenuLinks = document.querySelectorAll(".top-link");
topMenuEl.addEventListener("click", mouseClick);

function mouseClick(e) {
  // Prevent the default link (html?).
  e.preventDefault();

  // Return if the element clicked was not a <a> element.
  if (e.target.tagName !== "A") {
    return;
  }
  console.log(topMenuLinks);
  //ACTIVE LINK
  topMenuLinks.forEach(function (activeLink) {
    activeLink.classList.remove("active");
  });
  e.target.classList.add('active');
  subMenuEl.style.top = "100 %";
  // Get the content of the clicked <a> element.
  const linkContent = e.target.textContent;

  // Log the content of the <a> element to the console.
  console.log(linkContent);
};
///////////////////////SUB-MENU/////////////////
//////////////////////STEP ONE/////////////////////
//Setting the sub-menu

// const subMenuEl = document.querySelector("#sub-menu");
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "#3da4ab";
// subMenuEl.classList.add("flex-around");
// //subMenuEl.style.position = "absolute";//this one here, hides the submenu from the screen
// // Set the CSS top property of subMenuEl to the value of 0.
// subMenuEl.style.top = 0;

/*Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:*/
// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

