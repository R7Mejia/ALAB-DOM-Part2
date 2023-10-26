// Menu data structure
const menuLinks = [
  {
    text: "about",
    href: "#",
  },
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

// Step 1: Create and style the main content
const mainEl = document.querySelector("main");
mainEl.classList.add("flex-ctr");
const h1Element = document.createElement("h1");
h1Element.textContent = "DOM Manipulation";
mainEl.appendChild(h1Element);
h1Element.style.color = "red";
mainEl.style.backgroundColor = "gray";

// Step 2: Style the top menu
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

//iterate over the entire menuLinks array and for each link create an <a> element that connects to the arrays buttons/hrefs
menuLinks.forEach(function (link) {
  const anchorTag = document.createElement("a"); //creates an anchor (<a>)  tag
  //link the arrays/href's
  anchorTag.textContent = link.text;
  anchorTag.href = link.href;
  anchorTag.style.color = "yellow"; //Just added color. Mamma mia, ragazzi è una cosa bellissima!
  anchorTag.classList.add("top-link"); //
  //the anchorTag element will be displayed as a child of the topMenu element
  topMenuEl.appendChild(anchorTag);
});

// Step 3: Create the sub-menu and set its properties
const subMenuEl = document.createElement("nav");
subMenuEl.setAttribute("id", "sub-menu");
subMenuEl.style.height = "";
//how can I make the subMenu bar dissapear after 2 seconds?
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
document.querySelector("header").appendChild(subMenuEl);

// Step 4:
const topMenuLinks = document.querySelectorAll(".top-link");
topMenuEl.addEventListener("click", mouseClick);
// Showthe submenu.

function mouseClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  }

  const clickedLink = evt.target;

  // resolve the ABOUT issue
  if (clickedLink.textContent === "about") {
    //console.log(linkContent)
  } else {
    subMenuEl.style.height = "100%";
    // Remove the "active" class from all links.
    topMenuLinks.forEach((link) => link.classList.remove("active"));
  }
  // Add the "active" class to the clicked link.
  clickedLink.classList.add("active");

  // Get the text of the clicked link.
  const linkContent = clickedLink.textContent;

  // Build the submenu.
  buildSubmenu(linkContent);

}
function buildSubmenu(linkContent) {
  // eliminating? the current contents of the subMenuEl element.
  subMenuEl.innerHTML = "";

  // Get the sub-links for the clicked link.
  const subLinks = menuLinks.find((link) => link.text === linkContent).subLinks;
  // console.log(subLinks)
  // Append the sub-links to the subMenuEl element.
  //console.log(subLinks)

  if (subLinks) {
    subLinks.forEach((subLink) => {
      const anchorTag = document.createElement("a");
      anchorTag.href = subLink.href;
      anchorTag.textContent = subLink.text;
      subMenuEl.appendChild(anchorTag);
    });
  }
  // Hide the submenu after 2 seconds
  setTimeout(() => {
    subMenuEl.style.height = "0";
  }, 5000);
}
