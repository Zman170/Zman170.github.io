/* jshint esversion: 6 */
const menu = [
  {
    id: 1,
    title: "Royal Pancakes",
    category: "breakfast",
    price: 19.55,
    img: "./img/item-1.jpeg",
    desc: `A fabulous and delicious pancake board with a variety of fruit toppings and your choice of syrup `,
  },
  {
    id: 2,
    title: "Lunch Special",
    category: "lunch",
    price: 20.00,
    img: "./img/item-2.jpeg",
    desc: `Simple Burger with Fries - patty done as requested. `,
  },
  {
    id: 3,
    title: "Dentist Lover",
    category: "shakes",
    price: 10.00,
    img: "./img/item-3.jpeg",
    desc: `Delicious and delightfully rich milkshake topped with a cookie laden with whipped crean and gooey marshmallows `,
  },
  {
    id: 4,
    title: "English Delight",
    category: "breakfast",
    price: 25.00,
    img: "./img/item-4.jpeg",
    desc: `Typical English breakfast served with poached or fried egg, hashbrowns, toasted bread and butter, sausages and tea or coffee `,
  },
  {
    id: 5,
    title: "Vegan Surprise",
    category: "lunch",
    price: 30.75,
    img: "./img/item-5.jpeg",
    desc: `Our exclusive vegan patty, served in a vegan bun and topped with grilled fesh onions, tomatoes, grilled fresh arugula, lettuce and our special vegan sauce. `,
  },
  {
    id: 6,
    title: "Double Chocolate",
    category: "shakes",
    price: 9.95,
    img: "./img/item-6.jpeg",
    desc: `Delicious shake made with soft serve, chocolate syrup and finished off with a creamy whipped topping and served with oreo cookies `,
  },
  {
    id: 7,
    title: "Bacon Bonus",
    category: "breakfast",
    price: 15.95,
    img: "./img/item-7.jpeg",
    desc: `fried eggs, cheddar, bacon jam on a poppy seed bun and topped with extra bacon `,
  },
  {
    id: 8,
    title: "Burger with Fries",
    category: "lunch",
    price: 25,
    img: "./img/item-8.jpeg",
    desc: `Traditional Burger with toppings of your choice, served with fries  `,
  },
  {
    id: 9,
    title: "Double Bubble Milkshake",
    category: "shakes",
    price: 15.45,
    img: "./img/item-9.jpeg",
    desc: `A delicious frothy milkshake made with real icecream and blended with your choice of milk and a choice of chocolate, strawberry, vanilla or peach syrup. Made with love and to be shared with that special someone.`,
  },
  {
    id: 10,
    title: "Tender Lover Steak Dinner",
    category: "dinner",
    price: 60.00,
    img: "./img/item-10.jpeg",
    desc: `Feast yourself on a succulent surloin of excellent quality, tender & juicy, cooked to perfection.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
