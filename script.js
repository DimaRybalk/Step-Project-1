// TABS
let tabs = function () {
  const tabButtons = document.querySelectorAll(".cell");
  const tabContent = document.querySelectorAll(".our_service_tab_content");
  let tabName;

  tabButtons.forEach((element) => {
    element.addEventListener("click", selectTab);
  });

  function selectTab() {
    tabButtons.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((element) => {
      element.classList.contains(tabName)
        ? element.classList.add("text_active")
        : element.classList.remove("text_active");
    });
  }
};
tabs();

// filter
const list = document.querySelector(".amazing_work_tab");

const listItems = document.querySelectorAll(".amazing_work_tab_cell");
let targetId = "all";
list.addEventListener("click", (event) => {
  targetId = event.target.dataset.id;
  const target = event.target;
  picturesContainer.innerHTML = "";
  counter = 0;
  button.style.display = "flex";
  renderArray = gallery.slice(0, 12);
  renderArray.forEach((_, index) => {
    createNewCard(index);
  });
  filter(targetId);
  if (target.classList.contains("amazing_work_tab_cell")) {
    listItems.forEach((element) => {
      element.classList.remove("amazing_tab_active");
      target.classList.add("amazing_tab_active");
    });
  }
});
function filter(targetId) {
  const items = document.querySelectorAll(".amazing_work_picture");

  switch (targetId) {
    case "all":
      items.forEach((element) => {
        if (element.classList.contains("amazing_work_picture")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
      break;
    case "grafic_design":
      items.forEach((element) => {
        if (element.classList.contains("grafic_design")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
      break;
    case "Web_Design":
      items.forEach((element) => {
        if (element.classList.contains("Web_Design")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
      break;
    case "landing_pages":
      items.forEach((element) => {
        if (element.classList.contains("landing_pages")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
      break;
    case "wordpress":
      items.forEach((element) => {
        if (element.classList.contains("wordpress")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
      break;

    default:
      break;
  }
}
filter();
// load more
const gallery = [
  {
    id: 1,
    src: "./imgs/Layer 32.png",
    category: "grafic_design",
  },
  {
    id: 2,
    src: "./imgs/Layer 24.png",
    category: "Web_Design",
  },
  {
    id: 3,
    src: "./imgs/Layer 25.png",
    category: "landing_pages",
  },
  {
    id: 4,
    src: "./imgs/Layer 26.png",
    category: "wordpress",
  },
  {
    id: 5,
    src: "./imgs/Layer 27.png",
    category: "grafic_design",
  },
  {
    id: 6,
    src: "./imgs/Layer 28.png",
    category: "Web_Design",
  },
  {
    id: 7,
    src: "./imgs/Layer 29.png",
    category: "landing_pages",
  },
  {
    id: 8,
    src: "./imgs/Layer 30.png",
    category: "wordpress",
  },
  {
    id: 9,
    src: "./imgs/Layer 31.png",
    category: "grafic_design",
  },
  {
    id: 10,
    src: "./imgs/Layer 32.png",
    category: "Web_Design",
  },
  {
    id: 11,
    src: "./imgs/Layer 33.png",
    category: "landing_pages",
  },
  {
    id: 12,
    src: "./imgs/Layer 34.png",
    category: "wordpress",
  },
  {
    id: 13,
    src: "./imgs/Layer 32.png",
    category: "grafic_design",
  },
  {
    id: 14,
    src: "./imgs/Layer 24.png",
    category: "Web_Design",
  },
  {
    id: 15,
    src: "./imgs/Layer 25.png",
    category: "landing_pages",
  },
  {
    id: 16,
    src: "./imgs/Layer 26.png",
    category: "wordpress",
  },
  {
    id: 17,
    src: "./imgs/Layer 27.png",
    category: "grafic_design",
  },
  {
    id: 18,
    src: "./imgs/Layer 28.png",
    category: "Web_Design",
  },
  {
    id: 19,
    src: "./imgs/Layer 29.png",
    category: "landing_pages",
  },
  {
    id: 20,
    src: "./imgs/Layer 30.png",
    category: "wordpress",
  },
  {
    id: 21,
    src: "./imgs/Layer 31.png",
    category: "grafic_design",
  },
  {
    id: 22,
    src: "./imgs/Layer 32.png",
    category: "Web_Design",
  },
  {
    id: 23,
    src: "./imgs/Layer 33.png",
    category: "landing_pages",
  },
  {
    id: 24,
    src: "./imgs/Layer 34.png",
    category: "wordpress",
  },
];

let renderArray = gallery.slice(0, 12);

const picturesContainer = document.querySelector(".amazing_work_pictures"),
  button = document.querySelector(".amazing_work_load_more_button"),
  picture = document.querySelectorAll(".amazing_work_picture");

function createNewCard(i) {
  const photos = renderArray[i].src;
  const cell = document.createElement("div");
  cell.classList.add("amazing_work_picture");
  cell.classList.add(renderArray[i].category);
  const backside = document.createElement("div");
  backside.classList.add("hidden_side");
  const backSideImg = document.createElement("img");
  backSideImg.classList.add("hidden_side_picture");
  backSideImg.src = "./imgs/back_icon.svg";
  const description = document.createElement("div");
  description.classList.add("hidden_side_descriptions");
  backside.append(backSideImg, description);
  const firstSpan = document.createElement("span");
  firstSpan.innerText = "creative design";
  firstSpan.classList.add("first_description");
  const secondSpan = document.createElement("span");
  secondSpan.innerText = renderArray[i].category;
  secondSpan.classList.add("second_description");
  description.append(firstSpan, secondSpan);
  cell.append(backside);
  const majorImg = document.createElement("img");
  majorImg.src = photos;
  const majorSide = document.createElement("div");
  majorSide.classList.add("major_side");
  majorSide.append(majorImg);
  cell.append(majorSide);
  picturesContainer.append(cell);
}
let counter = 0;
button.addEventListener("click", () => {
  picturesContainer.innerHTML = "";
  counter++;
  if (counter === 1) {
    button.style.display = "none";
  }
  if (targetId === "all") {
    renderArray = gallery.slice(0, 24);
  } else {
    renderArray = gallery.slice(0, 24).filter((elem) => {
      return elem.category === targetId;
    });
    console.log(renderArray, targetId);
  }
  console.log(renderArray);
  renderArray.forEach((_, index) => {
    createNewCard(index);
  });
});

// slider

const dotsContent = Array.from(document.querySelectorAll(".comments_profile"));
const dots = document.querySelectorAll(".coments_slider_photos");
let currentIndex = 0;

let comTabs = function () {
  dots.forEach((element) => {
    element.addEventListener("click", (event) => {
      currentIndex = event.target.dataset.index;
      dots.forEach((element) => {
        if (element.classList.contains("photo_active")) {
          element.classList.remove("photo_active");
        }
      });
      event.target.classList.add("photo_active");
      dotsContent.forEach((element) => {
        element.getAttribute("data-index");
        element.classList.remove("com_active");
        if (element.getAttribute("data-index") == currentIndex) {
          element.classList.add("com_active");
        }
      });
    });
  });
};
comTabs();

const leftArrow = document.querySelector(".left_arrow");

function currentInfo() {
  dotsContent.forEach((element, index) => {
    if (element.classList.contains("com_active")) {
      currentIndex = index;
    }
  });
}

leftArrow.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = (currentIndex + dotsContent.length) % dotsContent.length;
  } else {
    currentIndex = currentIndex % dotsContent.length;
  }
  dots.forEach((element) => {
    element.classList.remove("photo_active");
    if (element.getAttribute("data-index") == currentIndex) {
      element.classList.add("photo_active");
    }
  });

  dotsContent.forEach((element) => {
    element.getAttribute("data-index");
    element.classList.remove("com_active");
    if (element.getAttribute("data-index") == currentIndex) {
      element.classList.add("com_active");
    }
  });
});

const rightArrow = document.querySelector(".right_arrow");
rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 3) {
    currentIndex = (currentIndex + dotsContent.length) % dotsContent.length;
  } else {
    currentIndex = currentIndex % dotsContent.length;
  }
  dotsContent.forEach((element) => {
    element.getAttribute("data-index");
    element.classList.remove("com_active");
    if (element.getAttribute("data-index") == currentIndex) {
      element.classList.add("com_active");
    }

    dots.forEach((element) => {
      element.classList.remove("photo_active");
      if (element.getAttribute("data-index") == currentIndex) {
        element.classList.add("photo_active");
      }
    });
  });
});
