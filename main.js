// Menu data structure
const menuLinks = [
  { text: "about", href: "#" },
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
mainEl.style.backgroundColor = "#4a4e4d";

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
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
document.querySelector("header").appendChild(subMenuEl);


// Step 4: Handle click events on the top menu
const topMenuLinks = document.querySelectorAll(".top-link");
topMenuEl.addEventListener("click", mouseClick);

function mouseClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  }

  topMenuLinks.forEach(function (activeLink) {
    activeLink.classList.remove("active");
  });
  evt.target.classList.add("active");

  const linkContent = evt.target.textContent;
  console.log(linkContent);

  menuLinks.forEach((l) => {
    if (l.text === linkContent.toLowerCase()) {
      subMenuEl.innerHTML = "";
      
    }
  });

  subMenuEl.style.top = "100%";
}
